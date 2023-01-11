pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', credentialsId: 'git-creds', url: 'https://github.com/iamGeorgePro/React-landing-page.git'

            }
        }
        
        stage('Build Image') {
            steps {
                sh 'docker build -t landingpage:latest .'
            }
        }
        stage('Push Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-creds', url: 'https://hub.docker.com/u/georgepro1']) {
                    sh 'docker push landingpage:latest'
                }
            }
        }
    }
}

// pipeline {
//     agent {
//         docker {
//             image 'node:16'
//         }
//     }
//     stages {
//         stage('Clone') {
//             steps {
//                 git 'https://github.com/iamGeorgePro/React-landing-page.git'
//             }
//         }
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//                 sh 'npm run build'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'npm test'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh 'docker build -t spring_ci-cd:latest .'
//                 sh 'docker login -u georgepro1 -p 1996george@'
//                 sh 'docker push georgepro1/spring_ci-cd:latest'
//             }
//         }
//     }
// }

