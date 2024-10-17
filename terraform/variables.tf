# variables.tf

variable "instance_type" {
  description = "The type of instance to deploy"
  default     = "t4g.small"  # Change the instance type if needed
}

variable "key_name" {
  description = "The name of the EC2 Key Pair to allow SSH access"
  type        = string
}

