output "instance_public_ip" {
  description = "The public IP of the EC2 instance"
  value       = aws_instance.eduflex-app.public_ip
}

output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.eduflex-app.id
}

output "instance_arn" {
  description = "The ARN of the EC2 instance"
  value       = aws_instance.eduflex-app.arn 
}
