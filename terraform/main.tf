# main.tf


resource "aws_instance" "eduflex-app" {
  ami           = "ami-0e0e417dfa2028266"  # Amazon Linux 2 in ap-southeast-2
  instance_type = "t2.micro"
  key_name      = var.key_name             # Variable for the SSH key

  # Reference the existing security group
  vpc_security_group_ids = [data.aws_security_group.default.id]

  user_data = file("userdata.sh") 

  tags = {
    Name = "eduflex-app"
  }
}

# Resource to reference existing security group
resource "aws_security_group" "default" {
  # This only needs to be defined if you're modifying the existing security group or if Terraform needs to reference it.
  # It won't create a new security group but will point to the existing one.
  name = "default"
}
