pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-southeast-2'
        TF_VAR_instance_type = 't2.medium'
        TF_VAR_key_name = 'my-keypair'
        TERRAFORM_VERSION = '1.9.6'
    }

    stages {
        stage('Install Terraform') {
            steps {
                script {
                    // Create a temp directory and install Terraform in the workspace
                    sh '''
                    mkdir -p $WORKSPACE/terraform-install
                    cd $WORKSPACE/terraform-install
                    curl -o terraform.zip https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip
                    unzip terraform.zip
                    export PATH=$WORKSPACE/terraform-install:$PATH
                    terraform --version
                    '''
                }
            }
        }

        stage('Checkout Code') {
            steps {
                // Checkout your repository containing the Terraform code
                git url: 'https://github.com/Siddharthprabhakar/DevOps.git'
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
                    // Run Terraform commands
                    sh '''
                    export PATH=$WORKSPACE/terraform-install:$PATH
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
            cleanWs() // Clean up workspace after the build
        }
    }
}
