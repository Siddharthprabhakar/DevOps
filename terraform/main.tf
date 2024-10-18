# main.tf

resource "aws_instance" "eduflex-app" {
  ami           = "ami-084e237ffb23f8f97"  # Amazon Linux 2 in ap-southeast-2
  instance_type = "t2.micro"
  key_name      = var.key_name             # Variable for the SSH key
  
  user_data = file("userdata.sh") 

  tags = {
    Name = "eduflex-app"
  }
}
