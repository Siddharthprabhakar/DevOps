#!/bin/bash

# Update all packages
sudo yum update -y

# Install Git
sudo yum install git -y  # Add this line to install Git

# Install Docker
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user  # Add the ec2-user to the docker group

# Enable Docker to start on boot
sudo systemctl enable docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add Docker Compose to the system-wide PATH
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose  # This line adds Docker Compose to PATH

# Verify Docker Compose installation
docker-compose --version

# Create the project directory
mkdir -p /home/ec2-user/eduflex-app
cd /home/ec2-user/eduflex-app

# Clone the project repository
git clone https://github.com/Siddharthprabhakar/DevOps.git .

# Run Docker Compose to bring up the services
sudo /usr/local/bin/docker-compose up -d  # Use the full path to ensure it's found

# Output a success message
echo "eduflex application setup completed."
