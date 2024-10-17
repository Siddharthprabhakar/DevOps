pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Siddharthprabhakar/DevOps.git'
            }
        }

        stage('Setup Minikube') {
            steps {
                script {
                    // Start Minikube
                    sh 'minikube start --driver=docker'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images from your Docker Compose file
                    sh 'docker-compose -f docker-compose.yml build'
                }
            }
        }

        stage('Deploy Application to Minikube') {
            steps {
                script {
                    // Deploy the application to Minikube using kubectl
                    sh 'kubectl apply k8s/app-deployments.yaml' // Adjust the path to your deployment file
                }
            }
        }

        stage('Verify Application Deployment') {
            steps {
                script {
                    // Check the status of the application pods
                    sh 'kubectl get pods'
                }
            }
        }

        stage('Setup Terraform') {
            steps {
                script {
                    // Initialize Terraform
                    sh 'terraform init'

                    // Plan Terraform deployment
                    sh 'terraform plan'

                    // Apply Terraform configuration
                    sh 'terraform apply -auto-approve' // Ensure your Terraform scripts are set to create necessary resources
                }
            }
        }

        stage('Deploy ELK Stack') {
            steps {
                script {
                    // Deploy Elasticsearch, Logstash, and Kibana using Kubernetes manifests
                    sh 'kubectl apply -f k8s/elk/elasticsearch.yaml' // Adjust paths as necessary
                    sh 'kubectl apply -f k8s/elk/logstash.yaml'
                    sh 'kubectl apply -f k8s/elk/kibana.yaml'
                }
            }
        }

        stage('Verify ELK Deployment') {
            steps {
                script {
                    // Check the status of ELK pods
                    sh 'kubectl get pods -n elk' // Adjust namespace if necessary
                }
            }
        }
    }

    post {
        always {
            script {
                // Stop Minikube after the build
                sh 'minikube stop'
            }
        }
    }
}
