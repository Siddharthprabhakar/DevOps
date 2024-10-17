# main.tf

resource "aws_instance" "eduflex-app" {
  ami           = "ami-0a2363a9cff180a64"  # Amazon Linux 2 in ap-southeast-2
  instance_type = "t2.micro"
  key_name = "your-ec2-key-name"

  user_data = file("userdata.sh") 

  tags = {
    Name = "eduflex-app"
  }
}
