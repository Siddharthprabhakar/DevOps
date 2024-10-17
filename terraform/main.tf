# main.tf

resource "aws_instance" "worksync_app" {
  ami             = "ami-00f251754ac5da7f0"  # Amazon Linux 2 AMI
  instance_type   = var.instance_type       # Variable for the instance type
  key_name        = var.key_name            # Variable for the SSH key

  user_data = file("userdata.sh") 

  tags = {
    Name = "eduflex-app"
  }
}
