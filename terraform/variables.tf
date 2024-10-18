# variables.tf

variable "instance_type" {
  description = "The type of EC2 instance to create"
  default     = "t2.micro"  # Instance size
}

variable "frontend_docker_image" {
  description = "Docker image for the frontend application"
  default     = "sujaykumar47/frontend-app:latest"  # Replace with your actual image
}

variable "backend_docker_image" {
  description = "Docker image for the backend application"
  default     = "sujaykumar47/backend-app:latest"  # Replace with your actual image
}

variable "key_name" {
  description = "Key name for SSH access"
  default     = "my-ec2-key"  # Replace with your actual key pair name
}

variable "region" {
  description = "The AWS region to deploy resources in"
  default     = "ap-south-1"  # Specify your preferred region
}
