#!/usr/bin/env groovy

@Library('jenkins')
import net.intellihr.Helper

def helper = new net.intellihr.Helper(this)

final def DEFAULT_RELEASE_VERSION = 'prerelease'
final def RELEASE_VERSION = 'prerelease'

def shouldSkipBuild() {
  return ! sh(
    script: "git log -1 | grep '.*\\[ci skip\\].*'",
    returnStatus: true
  )
}

def SKIP_BUILD = false

pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = "$BUILD_TAG"
  }

  stages {
    stage('prepare') {
      steps {
        script {
          // method 1
          SKIP_BUILD = shouldSkipBuild()

          // method 2 - but this scans all changes in current build - of course you can only make it do the newest change though
          for (change in currentBuild.changeSets) {
            for (commit in change.items) {
              if (commit.msg.contains('[ci skip]')) {
                env.SKIP_CI = 'true'
              }
            }
          }
        }
      }
    }

    stage('Checkout gh-pages') {
      when {
        branch 'master'
        expression {
          !SKIP_BUILD
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
          !SKIP_BUILD
        }
      }
      steps {
        sh 'docker-compose build --force-rm jenkins'
      }
    }

    stage('tsc / lint / test') {
      when {
        expression {
          !SKIP_BUILD
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
          !SKIP_BUILD
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
                env.DEFAULT_RELEASE_VERSION = DEFAULT_RELEASE_VERSION
              }

              sh '''
                  docker-compose run --rm \
                    --name "$BUILD_TAG"-publish-npm \
                    --volume "$SSH_AUTH_SOCK":/tmp/agent.sock \
                    -e SSH_AUTH_SOCK=/tmp/agent.sock \
                    -e NPM_TOKEN=$NPM_TOKEN \
                    -e RELEASE_VERSION=$RELEASE_VERSION \
                    -e DEFAULT_RELEASE_VERSION=$DEFAULT_RELEASE_VERSION \
                    jenkins ./docker/bin/deploy-npm
              '''
            }
          }
        }
      }
    }
  }
}
