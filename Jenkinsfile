pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'  // Set your desired AWS region
        TF_VAR_instance_type = 't2.medium'
        TF_VAR_key_name = 'my-keypair'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Checkout the repository containing Terraform files
                    checkout scm
                }
            }
        }

        stage('Set up AWS Credentials') {
            steps {
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding',
                     credentialsId: '086770f8-572a-4da9-bcb3-206503c74593',
                     accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                     secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']
                ]) {
                    // Run Terraform init, plan, and apply
                    sh '''
                    terraform init
                    terraform plan
                    terraform apply -auto-approve
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}

