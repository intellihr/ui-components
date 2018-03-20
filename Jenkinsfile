#!/usr/bin/env groovy

@Library('jenkins')
import net.intellihr.Helper
import net.intellihr.CodeAnalysis

def helper = new net.intellihr.Helper(this)
def analyse = new net.intellihr.CodeAnalysis(this)

pipeline {
  agent {
    dockerfile {
      additionalBuildArgs '--force-rm'
    }
  }

  stages {
    stage('Checkout gh-pages') {
      steps {
        dir ('/code') {
          sshagent (credentials: ['GITHUB_CI']) {
            sh '''
              git fetch --no-tags --progress git@github.com:intellihr/ui-components.git \
                +refs/heads/gh-pages:refs/remotes/origin/gh-pages
            '''
          }
        }
      }
    }

    stage('Build') {
      steps {
        dir ('/code') {
          sh 'yarn build'
        }
      }
    }

    stage('Publish gh-pages') {
      when {
        branch 'master'
      }

      steps {
        dir ('/code') {
          sshagent (credentials: ['GITHUB_CI']) {
            script {
              try {
                sh 'git add .'
                sh 'git -c user.email="continuous.integration@intellihr.com.au" -c user.name="IntelliHR CI" commit -m "Update gh-pages as of $(git log \'--format=format:%H\' remotes/origin/master -1)"'
                sh 'yarn gh-pages'
              } catch (Exception e) {
                echo 'No need to publish gh-pages...Skipping...'
              }
            }
          }
        }
      }
    }

    stage('Publish NPM') {
      when {
        branch 'master'
      }

      steps {
        dir ('/code') {
          sshagent (credentials: ['GITHUB_CI']) {
            sh 'git config user.email "continuous.integration@intellihr.com.au"'
            sh 'git config user.name "IntelliHR CI"'
          }

          withNPM(npmrcConfig: 'npm-config') {
            script {
              try {
                echo 'About to publish to npm'
                sh 'npm version patch'
              } catch (Exception e) {
                echo 'No need to update the version...Skipping...'
              }
            }
          }

          sshagent (credentials: ['GITHUB_CI']) {
            script {
              try {
                sh 'git branch'
                sh 'git push origin master'
              } catch (Exception e) {
                echo 'Nothing to push...'
              }
            }
          }
        }
      }
    }
  }
}
