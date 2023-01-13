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
                sh 'docker build -t landingpage .'
                sh 'docker tag landingpage georgepro1/spring_ci-cd '
            }
        }

       
        stage('Checkstyle analysis') {
           steps {
            sh 'docker run --rm -v "$(pwd)":/app landingpage  mvn checkstyle:checkstyle'
            script {
            def checkstyle = checkstyle(pattern: '**/checkstyle-result.xml')
            if (checkstyle.failed) {
                currentBuild.result = "FAILED"
                error("Checkstyle violations found.")
            }
        }
    }
        }
    stage('JaCoCo analysis') {
     steps {
        sh 'docker run --rm -v "$(pwd)":/app landingpage mvn jacoco:prepare-agent test jacoco:report'
    }
    post {
        always {
            jacoco pattern: '**/target/jacoco.exec'
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
                   -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info/ \
                   -Dsonar.junit.reportsPath=target/surefire-reports/ \
                   -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                   -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml'''
                }

                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        
     
       stage('Push') {
            steps {
               withCredentials([string(credentialsId: 'docker-new', variable: 'TOKEN')]) {
    sh "docker login --username=georgepro1 --password=${TOKEN}"
    sh 'docker push georgepro1/spring_ci-cd'
}

            }
    }
}
}


