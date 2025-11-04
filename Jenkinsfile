pipeline {
  agent {
    docker {
      image 'node:18-alpine'  // Use a lightweight Node.js image
      args '-u root:root'     // Gives root access inside container
    }
  }

  environment {
    SONAR_TOKEN = credentials('sonarqube-token')
    DOCKER_HUB_CREDS = credentials('docker-registry-creds')
  }

  stages {
    stage('Install deps') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint || true'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    failure {
      echo 'Build failed!'
    }
  }
}
