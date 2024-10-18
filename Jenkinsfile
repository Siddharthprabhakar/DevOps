pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Siddharthprabhakar/DevOps.git'  // Your GitHub repository URL
        // DOCKER_FRONTEND_IMAGE = 'sujaykumar47/frontend-app'  // Docker image for frontend
        // DOCKER_BACKEND_IMAGE = 'sujaykumar47/backend-app'  // Docker image for backend
        DOCKER_WEBSITE_IMAGE = 'sujaykumar47/website'  // Docker image for website
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from 
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        // stage('Build Frontend') {
        //     steps {
        //         script {
        //             // Build frontend Docker image
        //             bat "docker build -t ${DOCKER_FRONTEND_IMAGE}:${DOCKER_TAG} ./client"
        //         }
        //     }
        // }

        stage('Build Website') {
            steps {
                script {
                    // Build Docker Compose file
                    bat "docker-compose up --build"
                }
            }
        }

        // stage('Build Backend') {
        //     steps {
        //         script {
        //             // Build backend Docker image
        //             bat "docker build -t ${DOCKER_BACKEND_IMAGE}:${DOCKER_TAG} ./server"
        //         }
        //     }
        // }

        stage('Login to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        // Login to Docker Hub
                        bat "docker login -u %DOCKERHUB_USER% -p %DOCKERHUB_PASSWORD%"
                    }
                }
            }
        }

        stage('Push Docker Images to DockerHub') {
            steps {
                script {
                    // Push frontend and backend images to Docker HUB
                    // bat "docker push ${DOCKER_FRONTEND_IMAGE}:${DOCKER_TAG}"
                    // bat "docker push ${DOCKER_BACKEND_IMAGE}:${DOCKER_TAG}"
                    bat "docker push ${DOCKER_WEBSITE_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Verify AWS Configuration') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-terraform'
                ]]) {
                    bat 'aws sts get-caller-identity'
                }
            }
        }

        stage('Terraform Init') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-terraform'
                ]]) {
                    dir('terraform') {
                        bat 'terraform init'
                    }
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-terraform'
                ]]) {
                    dir('terraform') {
                        bat 'terraform plan -out=tfplan'
                    }
                }
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-terraform'
                ]]) {
                    dir('terraform') {
                        bat 'terraform apply -auto-approve tfplan'
                    }
                }
            }
        }

        stage('Logout from DockerHub') {
            steps {
                script {
                    // Logout from Docker Hub
                    bat 'docker logout'
                }
            }
        }
    }


    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}