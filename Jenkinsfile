#!/usr/bin/env groovy

@Library('jenkins')
import net.intellihr.Helper
import net.intellihr.CodeAnalysis

def helper = new net.intellihr.Helper(this)
def analyse = new net.intellihr.CodeAnalysis(this)

def skipBuild = false

def RELEASE_VERSION = 'patch'

pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = "$BUILD_TAG"
  }

  stages {
    stage('prepare') {
      steps {
        script {
          skipBuild = helper.shouldSkipBuild()

          echo "Storing fontawesome authentication"
          fontawesomeAuth = helper.getSSMParameter("/shared/npm/config/fontawesome")
        }

        // Setup FontAwesome PRO token for npm:
        // https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
        sh "echo \"${helper.getSSMParameter('/shared/npm/config/fontawesome')}\" >> .npmrc"
      }
    }

    stage('Detect Version') {
      when {
        branch 'master'
      }
      steps {
        script {
          def prId = helper.github.getPullRequestIdFromCommit('intellihr/ui-components', env.GIT_COMMIT)
          if (prId != null) {
            echo "Pull request ID: ${prId}"
            for (label in helper.github.getPullRequestLabels('intellihr/ui-components', prId)) {
              if (label == 'MAJOR') {
                RELEASE_VERSION = 'major'
                break
              } else if (label == 'MINOR') {
                RELEASE_VERSION = 'minor'
                break
              }
            }
          }
          echo "The next release version is ${RELEASE_VERSION}"
        }
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
        sshagent (credentials: ['GITHUB_CI_SSH_KEY']) {
          script {
            try {
              sh '''
                git fetch --no-tags --progress git@github.com:intellihr/ui-components.git \
                  +refs/heads/gh-pages:refs/remotes/origin/gh-pages
              '''
            } catch (Exception e) {
              sh 'rm -rf styleguide'
              sh 'mkdir styleguide'
              dir ('./styleguide') {
                sh 'git init'
                sh 'git checkout -b gh-pages'
                sh '''
                  git \
                    -c user.email="continuous.integration@intellihr.com.au" \
                    -c user.name="IntelliHR CI" \
                    commit \
                    --allow-empty \
                    -m "Initial GitHub Page Branch"
                '''
                sh 'git remote add origin git@github.com:intellihr/ui-components.git'
                sh 'git push --set-upstream origin gh-pages'
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
            sshagent (credentials: ['GITHUB_CI_SSH_KEY']) {
              script {
                try {
                  sh '''
                    docker-compose run --rm \
                      --name "$BUILD_TAG"-gh-pages \
                      --volume "$SSH_AUTH_SOCK":/tmp/agent.sock \
                      -e SSH_AUTH_SOCK=/tmp/agent.sock \
                      jenkins ./docker/bin/deploy-gh-page
                  '''
                } catch (Exception e) {
                  echo 'No need to publish gh-pages...Skipping...'
                }
              }
            }
          }
        }
        stage('Publish NPM') {
          steps {
            sshagent (credentials: ['GITHUB_CI_SSH_KEY']) {
              script {
                env.NPM_TOKEN = helper.getSSMParameter('shared.NPM_TOKEN')
                env.RELEASE_VERSION = RELEASE_VERSION
              }

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
        message: "Jenkins UI-Components (${env.BRANCH_NAME}) <${env.BUILD_URL}|#${env.BUILD_NUMBER}> *FAILED*"
      )
    }
    success {
      slackSend(
        channel: "#devops-log",
        color: 'good',
        message: "Jenkins UI-Components (${env.BRANCH_NAME}) <${env.BUILD_URL}|#${env.BUILD_NUMBER}> *SUCCESSFUL*"
      )
    }
  }
}
