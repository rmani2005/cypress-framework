pipeline {
agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '35'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('manikandanravi9')
    HOME = '.'
  } 
  stages {
  	stage('PreCond') {
            agent {
                docker {
                    image 'node:18'
                }	
            }
            
            steps {
                sh 'node -v'
                sh 'npm install'
                //Execute the Cypress scripts
                sh 'npm run cy:run:headless:Test'
            }
        }
  
  
    stage('Build') {
      steps {
	sh 'echo "XXXXXXXXXXXXBuilding block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        //sh 'docker build -t manikandanravi9/mybiositenextjs:latest .'
        sh 'echo "XXXXXXXXXXXXBuilding block Completed XXXXXXXXXXXXXXXXXXXXXXXXx"'
      }
    }
    stage('Login') {
      steps {
       sh 'echo "XXXXXXXXXXXXDocker hub loginstarted XXXXXXXXXXXXXXXXXXXXXXXXx"'
        //sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
       // sh 'docker push manikandanravi9/mybiositenextjs:latest'
      }
    }
    stage('Run in local host') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        //sh 'docker run -d -p 3002:3000 manikandanravi9/mybiositenextjs:latest'
      }
  }
}
}		 
		 
