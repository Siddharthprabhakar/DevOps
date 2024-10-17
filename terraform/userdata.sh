#!/bin/bash
# userdata.sh

# Update all packages
sudo yum update -y

# Install Docker
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user  # Add the ec2-user to the docker group

# Enable Docker to start on boot
sudo systemctl enable docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify Docker Compose installation
docker-compose --version

# Create the project directory
mkdir -p /home/ec2-user/eduflex-app
cd /home/ec2-user/eduflex-app

# Clone the project repository (replace with your actual repository URL)
# You can replace this with a download or S3 copy command if you're storing your Docker Compose and related files on S3
# Example: aws s3 cp s3://bucket-name/docker-compose.yml .
git clone https://github.com/Siddharthprabhakar/DevOps.git .

# Run Docker Compose to bring up the services
sudo docker-compose up -d

# Output a success message
echo "eduflex application setup completed."
