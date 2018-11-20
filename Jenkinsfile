#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Push to wiki') {
      when {
        branch 'wiki'
      }

      steps {
        sshagent (credentials: ['GITHUB_CI_SSH_KEY']) {
          script {
            sh 'git remote add wiki git@github.com:intellihr/ui-components.wiki.git || true'
            sh 'git push -fu wiki HEAD:master'
          }
        }
      }
    }
  }
}
