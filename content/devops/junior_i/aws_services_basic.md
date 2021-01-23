+++
title = "AWS Services Basics"
+++

{{%bubble %}}

## AWS Services Basics

**Required**

**Description:** You understand AWS services that allow you to deploy frontend applications.

**Person which succesfully completed requirement for given block can:**

- Work with AWS services needed to setup frontend application
- Understand key features of some AWS services
- Use and configure AWS services based on requirements

{{% /bubble%}}

### 🎓 Learn
- [S3 docs](https://docs.aws.amazon.com/s3/index.html)
- [CloudFront docs](https://docs.aws.amazon.com/cloudfront/index.html)
- [Route53 docs](https://docs.aws.amazon.com/route53/index.html)
- [AWS Cert Manager docs](https://docs.aws.amazon.com/acm/index.html)
- [IAM docs](https://docs.aws.amazon.com/iam/index.html)

### 📝 Katas
**For this challange configure it using Terraform as described in the [IaaC Fundamentals](/devops/junior_i/iacc_fundamentals/)**

Create a small AWS infrastructure for a frontend application that can be found [here](). The following resources should be used:
- S3
- CloudFront
- Route53
- AWS Cert Manager
- IAM

### 🎤 Interview
- What is the general idea behind Cloudfront?
- What purpose does invalidation in Cloudfront serve??
- How would you migrate exisiting DNS settings to Route53?
- Explain some points in which Route53 differes from a typical DNS service?
- Explain briefly S3 lifecycle and what can you achieve with it?
- What types of S3 storage are available and how they differ?
- Explain the difference between role and user?
- Explain example policy and the policy structure
- What is the purpose of AWS Cert Manager


