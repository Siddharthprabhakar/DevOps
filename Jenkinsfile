pipeline {
    agent any

    environment {
        AWS_REGION = 'AWS_REGION'
        TF_VAR_instance_type = 't2.medium'
        TF_VAR_key_name = 'my-keypair'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scmGit(branches: [[name: 'main']], 
                                userRemoteConfigs: [[url: 'https://github.com/Siddharthprabhakar/DevOps']])
            }
        }

        stage('Set up AWS Credentials') {
            steps {
                withCredentials([[ 
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-terraform',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
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
