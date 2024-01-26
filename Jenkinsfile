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
  	stage('Pre installation of Node and npm installation of packages') {
            agent {
                docker {
                    image 'node:21'
                }	
            }
            
            steps {
                sh 'node -v'
                sh 'npm install'
                //Execute the Cypress scripts
                sh 'npm run cy:open:headless:Test'
            }
        }
  
  
    stage('Post Execution') {
        steps
        {
          echo 'Post Execution Starts!'
        }
        post 
            {
                success 
                {
                    archiveArtifacts artifacts:'results/mybioTest.cy.js/', fingerprint: true
                    echo 'Successfully!'
                }
                
		        failure {
		            echo 'Failed!'
		        }
		        unstable {
		            echo 'This will run only if the run was marked as unstable'
		        }
		        changed {
		            echo 'This will run only if the state of the Pipeline has changed'
		            echo 'For example, if the Pipeline was previously failing but is now successful'
		        }
                
            }
      }
}
        


}		 
		 
