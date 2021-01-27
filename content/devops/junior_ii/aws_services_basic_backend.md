+++
title = "AWS Services Basics - Backend"
+++

{{%bubble %}}

## AWS Services Basics - Backend

**Required**

**Description:** You understand AWS services that allow you to create infrastructure for typical backend applications

**Person which succesfully completed requirement for given block can:**

- Work with AWS services needed to setup backend application
- Understand key features of some AWS services
- Use and configure AWS services based on requirements

{{% /bubble%}}

### 🎓 Learn
- [VPC docs](https://docs.aws.amazon.com/vpc/index.html)
- [NAT Gateway docs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
- [RDS docs](https://docs.aws.amazon.com/rds/index.html)
- [EC2 docs](https://docs.aws.amazon.com/ec2/index.html)
- [ECS docs](https://docs.aws.amazon.com/ecs/index.html)
- [ALB docs](https://docs.aws.amazon.com/elasticloadbalancing/)
- [Route53 docs](https://docs.aws.amazon.com/route53/index.html)
- [AWS Cert  Manager docs](https://docs.aws.amazon.com/acm/index.html)
- [Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html)

### 📝 Katas
**All the infrastructure should be setup using Terraform**

Create a small AWS infrastructure for a backend application that can be found [here](). The following resources should be used:
- VPC + NAT Gateway
- RDS
- Security Groups
- EC2
- ECS
- ALB
- Autoscaling Groups(no upscale and downscale required for now)

**Notes**
You can use module for VPC and NAT setup that can be found [here]()
Backend should have a proper DNS setup.
Connect frontend application created before with the deployed frontend
Prepare CI pipeline for the backend application similar to the one for frontend

### 🎤 Interview
- How would you manage income traffic for 2 different domains with ALB?
- What is the default policy of a security group?
- How many subnets can I have in my VPC?
- What is the difference between private and public subnets
- How can I establish a connection with an EC2 instance or AWS service colocated in a private subnet?
- Explain NAT and NAT Gateway in your own words.
- What is the difference between EC2 and Fargate drivers in ECS?
- When would you use Auto Scaling Groups?
- What is the difference in “desired_capacity” and “max_size” and “min_size”?
- How to spawn instances in two availability zones?
- What is the purpose of EC2 keys?
- What is an AMI
- How would you configure RDS to make it more secure?

