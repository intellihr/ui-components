#!/usr/bin/env groovy

@Library('jenkins')
import net.intellihr.Helper
import net.intellihr.CodeAnalysis

def helper = new net.intellihr.Helper(this)

def skipBuild = false

pipeline {
  agent any

  environment {
    AWS_REGION = getAWSRegion()
    COMPOSE_PROJECT_NAME = "$BUILD_TAG"
    BUILD_TAG = env.BUILD_TAG.replaceAll(/jenkins-intelliHR Engineering-intellihr%2Fengineering%2F/, '').trim().replaceAll(/%2F|\/|\s/, '-').take(64)
  }

  stages {
    stage('prepare') {
      steps {
        script {
          skipBuild = helper.shouldSkipBuild()
          env.ENV_TYPE = (helper.isExperimental()) ? 'experimental' : (env.BRANCH_NAME == 'master') ? 'prod' : 'dev'
          env.RELEASE_VERSION = 'patch'

          withAWSParameterStore(namePrefixes: '/shared/ASSUME_ROLE_ARNS,/shared/NPM_TOKEN,/jenkins/GITLAB_TOKEN', regionName: env.AWS_REGION) {
            env.NPM_TOKEN = env.SHARED_NPM_TOKEN
            env.JENKINS_GITLAB_TOKEN = env.JENKINS_GITLAB_TOKEN

            assumeRole(env.ENV_TYPE)
            withAWSParameterStore(namePrefixes: '/shared/npm/FONTAWESOME_NPM_AUTH_TOKEN', regionName: env.AWS_REGION) {
              env.FONTAWESOME_NPM_AUTH_TOKEN = env.SHARED_NPM_FONTAWESOME_NPM_AUTH_TOKEN
            }
          }
          // Setup FontAwesome PRO token for npm:
          // https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
          sh "echo \"@fortawesome:registry=https://npm.fontawesome.com/ \n//npm.fontawesome.com/:_authToken=${env.FONTAWESOME_NPM_AUTH_TOKEN}\" > .npmrc"
          resetAWSCredentials()
        }
      }
    }

    stage('Detect Version') {
      when {
        branch 'master'
      }
      steps {
        script {
          def labels = sh(script: '.ci/scripts/get-gitlab-labels', returnStdout: true).trim().split(',')
          if (labels.contains('MAJOR')) {
            env.RELEASE_VERSION = 'major'
          } else if (labels.contains('MINOR')) {
            env.RELEASE_VERSION = 'minor'
          }
        }
        echo "The next release version is ${env.RELEASE_VERSION}"
      }
    }

    stage('Checkout gh-pages') {
      when {
        branch 'master'
        expression {
          !skipBuild
        }
      }
      steps {
        sshagent (credentials: ['GITLAB_CI']) {
          script {
            try {
              sh '''
                git fetch --no-tags --progress git@gitlab.com:intellihr/engineering/ui-components.git \
                  +refs/heads/pages:refs/remotes/origin/pages
              '''
            } catch (Exception e) {
              sh 'rm -rf styleguide'
              sh 'mkdir styleguide'
              dir ('./styleguide') {
                sh 'git init'
                sh 'git checkout -b pages'
                sh '''
                  git \
                    -c user.email="continuous.integration@intellihr.com.au" \
                    -c user.name="IntelliHR CI" \
                    commit \
                    --allow-empty \
                    -m "Initial GitLab Page Branch"
                '''
                sh 'git remote add origin git@gitlab.com:intellihr/engineering/ui-components.git'
                sh 'git push --set-upstream origin pages'
              }
            }
          }
        }
      }
    }

    stage('Build') {
      when {
        expression {
          !skipBuild
        }
      }
      steps {
        sh 'docker-compose build --force-rm jenkins'
      }
    }

    stage('tsc / lint / test') {
      when {
        expression {
          !skipBuild
        }
      }
      parallel {
        stage('tsc') {
          steps {
            sh '''
              docker-compose run \
                --rm \
                --name "$BUILD_TAG"-tsc \
                jenkins \
                ./node_modules/.bin/tsc
            '''
          }
        }
        stage('ts-lint') {
          steps {
            sh '''
              docker-compose run \
                --rm \
                --name "$BUILD_TAG"-ts-lint \
                jenkins \
                yarn lint
            '''
          }
        }
        stage('sass-lint') {
          steps {
            sh '''
              docker-compose run \
                --rm \
                --name "$BUILD_TAG"-sass-lint \
                jenkins \
                yarn lint:sass
            '''
          }
        }
        stage('test') {
          steps {
            sh '''
              docker-compose run \
                --rm \
                --name "$BUILD_TAG"-test \
                -e CI=true \
                jenkins \
                yarn test
            '''
          }
        }
      }
    }

    stage('Publish GitHub Page / NPM') {
      when {
        branch 'master'
        expression {
          !skipBuild
        }
      }
      parallel {
        stage('Publish GitHub Page') {
          steps {
            sshagent (credentials: ['GITLAB_CI']) {
              script {
                sh '''
                  docker-compose run --rm \
                    --name "$BUILD_TAG"-gh-pages \
                    --volume "$SSH_AUTH_SOCK":/tmp/agent.sock \
                    -e SSH_AUTH_SOCK=/tmp/agent.sock \
                    jenkins ./docker/bin/deploy-page \
                    || echo 'No need to publish pages... Skipping...'
                '''
              }
            }
          }
        }
        stage('Publish NPM') {
          steps {
            sshagent (credentials: ['GITHUB_CI_SSH_KEY']) {
              sh '''
                  docker-compose run --rm \
                    --name "$BUILD_TAG"-publish-npm \
                    --volume "$SSH_AUTH_SOCK":/tmp/agent.sock \
                    -e SSH_AUTH_SOCK=/tmp/agent.sock \
                    -e NPM_TOKEN=$NPM_TOKEN \
                    -e RELEASE_VERSION=$RELEASE_VERSION \
                    jenkins ./docker/bin/deploy-npm
              '''
            }
          }
        }
      }
    }
  }

  post {
    always {
      sh 'docker-compose down || true'
      sh 'docker-compose rm -f -s -v || true'
    }
    failure {
      slackSend(
        channel: "#devops-log",
        color: 'danger',
        message: "UI-Components (${env.BRANCH_NAME}) <${env.BUILD_URL}|#${env.BUILD_NUMBER}> *FAILED*"
      )
    }
    success {
      slackSend(
        channel: "#devops-log",
        color: 'good',
        message: "UI-Components (${env.BRANCH_NAME}) <${env.BUILD_URL}|#${env.BUILD_NUMBER}> *SUCCESSFUL*"
      )
    }
  }
}

def getAWSRegion() {
  return sh(
      script: 'curl --silent http://169.254.169.254/latest/dynamic/instance-identity/document | grep "region" | cut -f4 -d\'"\'',
      returnStdout: true
    ).trim()
}

def assumeRole(def envType) {
  env.AWS_ASSUME_ROLE_ARN = readJSON(text: env.SHARED_ASSUME_ROLE_ARNS)[envType]

  def credentials = sh(script: './.ci/scripts/assume-role.sh', returnStdout: true).split()
  env.AWS_ACCESS_KEY_ID = credentials[0]
  env.AWS_SECRET_ACCESS_KEY = credentials[1]
  env.AWS_SESSION_TOKEN = credentials[2]

}

def resetAWSCredentials() {
  env.AWS_ACCESS_KEY_ID = ''
  env.AWS_SECRET_ACCESS_KEY = ''
  env.AWS_SESSION_TOKEN = ''
}
