# DevOps - Amazon Web Services (AWS)

technology lead: Bartlomiej Danek

## Learning

- [AWS Documentation](https://docs.aws.amazon.com/index.html#lang/en_us)
- [Effective DevOps with AWS](https://docs.zoho.eu/ws/pulse/file/3szsc1155d7af00ee4422a7aa6f91618d945b)
- [AWS Regions & Zones](https://docs.aws.amazon.com/AWSEC2latest/UserGuide/using-regions-availability-zones.html)
- [Getting started with AWS](https://www.youtube.com/watch?v=x7jGAdxYVVQ)
- [This is my architecture](https://aws.amazon.com/this-is-my-architecture)
- [Amazon Web Services](https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg) (youtube)
- [AWS Tutorial Series](https://www.youtube.com/channel/UClLLJjpSWRRa1BosQrNVDjA) (youtube)

# Junior

## Junior II

- [SES - Simple Email Service](https://aws.amazon.com/ses/) - storage service

## 📦 Amazon Simple Email Service

### 🎓 Learn

- 📗 [Service overview](https://aws.amazon.com/ses/)
- 📗 [Add Header Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html)
- 📗 [Bounce Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html)
- 📗 [Lambda Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html)
- 📗 [S3 Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html)
- 📗 [SNS Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html)
- 📗 [Stop Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html)
- 📗 [WorkMail Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html)

#### 🔍 Short Summary

Flexible, affordable, and highly-scalable email sending and receiving platform for businesses and developers
- highly scalable and cost-effective email service,
- uses content filtering technologies to scan outgoing emails to check standards and email content for spam and malware,
- supports full fledged emails to be sent as compared to SNS where only the message is sent in Email,
- ideal for sending bulk emails at scale,
- guarantees first hop,
- eliminates the need to support custom software or applications to do heavy lifting of email transport.

### 📝 Katas

- Set up SES and send sample email

### 🎤 Interview

- Tell me about Amazon SES
- Tell me about use cases for SES
- Tell mw how you set up SES in the application

# Independent

## Independent III

- [IAM - AWS Identity and Access Management](../aws/iam)
- [Lambda](../aws/lambda)
- [API Gateway](../aws/api-gateway) - allow to create, publish, maintain, monitor, and secure APIs at any scale

## 📦 S3

### 📝 Katas

- Create a bucket, make it private (access key and secret required to access)
- Generate expiring link to given resource
- Create a public read-only bucket

## 📦 IAM

### 🎓 Learn
- helps create and manage user identities and grant permissions for those users to access AWS resources
- helps create groups for multiple users with similar permissions
- is Global and does not need to be migrated to a different region

### 📝 Katas
- Set up two different accounts
  - first account can **only** create S3 objects
  - first account can **delete** create S3 objects

## 📦 DevOps / Lambda

### 🎓 Learn

- [EXERCISE] Set up a basic lambda with a public endpoint (use [API Gateway](#api-gateway)) and should handle `POST` requests
- serveless computing
- is priced on a pay per use
- allows to run different backends (python, nodejs, ruby etc)

# Mid

## Mid I

- 📗 [CloudWatch](../aws/cloudwatch) - monitoring service
- 📗 [RDS - Relational Database Service](../aws/rds) - database service
- 📗 [Route53](../aws/route53) - DNS service
- 📗 [SNS - Simple Notification Service](../aws/sns) - notification service
- 📗 [SQS - Simple Queue Service](../aws/sqs) - queue service
