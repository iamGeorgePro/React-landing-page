pipeline {
    agent any

    // environment {
    //     registry = "kubeimran/vproappdock"
    //     registryCredential = 'dockerhub'
    // }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', credentialsId: 'git-creds', url: 'https://github.com/iamGeorgePro/React-landing-page.git'

            }
        }
        
        stage('Build Image') {
            steps {
                sh 'docker build -t landingpage .'
                sh 'docker tag landingpage georgepro1/spring_ci-cd '
            }
        }
        stage('Push') {
            steps { withCredentials([string(credentialsId: 'docker-new', variable: 'TOKEN')]) {
    sh "docker login --username=georgepro1 --password=${TOKEN}"
    sh 'docker push georgepro1/spring_ci-cd'

}
               
    }
        }
    }

