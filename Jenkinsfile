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
  stages {
    stage('Build') {
        steps {
            sh 'yarn && yarn build'
        }
    }
  }
}
