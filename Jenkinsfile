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

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        
        stage ('CODE ANALYSIS WITH CHECKSTYLE'){
            steps {
                sh 'mvn checkstyle:checkstyle'
            }
            post {
                success {
                    echo 'Generated Analysis Result'
                }
            }
        }

        stage('CODE ANALYSIS with SONARQUBE') {

            environment {
                scannerHome = tool 'sonar4.8'
            }

            steps {
                withSonarQubeEnv('sonar_server2') {
                    sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=landingpage \
                   -Dsonar.projectName=landingp \
                   -Dsonar.projectVersion=1.0 \
                   -Dsonar.sources=src/ \
                   -Dsonar.java.binaries=target/test-classes/com/visualpathit/account/controllerTest/ \
                   -Dsonar.junit.reportsPath=target/surefire-reports/ \
                   -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                   -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml'''
                }

                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        
        stage('Build Image') {
            steps {
                sh 'docker build -t landingpage .'
                sh 'docker tag landingpage georgepro1/spring_ci-cd '
            }
        }
        stage('Push') {
            steps {
               withCredentials([string(credentialsId: 'docker-new', variable: 'TOKEN')]) {
    sh "docker login --username=YOUR_USERNAME --password=${TOKEN}"
    sh 'docker push georgepro1/spring_ci-cd'
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

