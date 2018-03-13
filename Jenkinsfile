#!/usr/bin/env groovy

@Library('jenkins')
import net.intellihr.Helper
import net.intellihr.CodeAnalysis

def helper = new net.intellihr.Helper(this)
def analyse = new net.intellihr.CodeAnalysis(this)
def pullRefsepc = env.CHANGE_TARGET ? '+refs/pull/' + env.CHANGE_ID + '/head:refs/remotes/origin/' + env.BRANCH_NAME : ''

pipeline {

  agent {
    docker {
      image 'node:8.9.4'
    }
  }

  options {
    skipDefaultCheckout true
  }

  stages {
    stage('checkout') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: 'refs/remotes/origin/' + env.BRANCH_NAME]],
          extensions: [[$class: 'CleanBeforeCheckout']],
          userRemoteConfigs: [[
            url: 'git@github.com:intellihr/ui-components.git',
            credentialsId: 'GITHUB_CI',
            refspec: '+refs/heads/master:refs/remotes/origin/master ' +
              // '+refs/heads/develop:refs/remotes/origin/develop ' +
              '+refs/heads/gh-pages:refs/remotes/origin/gh-pages ' +
              pullRefsepc
          ]]
        ])
      }
    }
    stage('Build') {
      steps {
        sh 'yarn && yarn build'
      }
    }

    stage('Publish NPM') {
      when {
        branch 'master'
      }

      steps {
        withNPM(npmrcConfig: 'npm-config') {
          echo 'About to publish to npm'
          sh 'npm version patch'
        }

        sshagent (credentials: ['GITHUB_CI']) {
          sh 'git -c user.email="continuous.integration@intellihr.com.au" -c user.name="IntelliHR CI" push origin master'
        }
      }
    }
  }
}
