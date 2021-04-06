+++
title = "Security basics"
+++

{{%bubble %}}

## Security basics

**Required:**

**Description:** You understand the fundamental security good practices for cloud infrustructer and can work with most common tools with minimal supervision.

**Person who successfully completed requirement for given block can:**

- Ability to write code using AWS security best practices
- Understand basic threats and measures to prevent them
- Understand basic concepts such as encryption, SSL, etc.
- Work with existing Vault instance

{{% /bubble%}}

### 🎓 Learn
- [Vault K/V](https://learn.hashicorp.com/tutorials/vault/versioned-kv)
- [Vault docs](https://learn.hashicorp.com/tutorials/vault/versioned-kv)
- [Jump host](https://www.tecmint.com/access-linux-server-using-a-jump-host/)
- [Encryption](https://www.ryadel.com/en/data-encryption-in-transit-at-rest-definitions-best-practices-tutorial-guide/)
- [Certificate Authority](https://cheapsslsecurity.com/blog/what-is-a-certificate-authority-ca/)
- [SSL/TSL](http://www.steves-internet-guide.com/ssl-certificates-explained/)
- [IAM docs](https://docs.aws.amazon.com/iam/index.html)
- https://kinsta.com/knowledgebase/how-ssl-works/
- https://www.ryangeddes.com/how-to-guides/linux/how-to-create-a-self-signed-ssl-certificate-on-linux/

### 📝 Katas
- Create a new key/value store in Vault and add new values to it using:
  - CLI
  - Terraform
  - UI
- Generate a Self-Signed SSL/TLS Certificate
- Create different IAM Policies
- Work with IAM Users, Policies and Roles
- Setup basic security principles in AWS for new IAM users
### 🎤 Interview
- Explain the difference between role and user?
- What kind of problems can you solve with Vault?
- What the default policy in Vault for not specified action in a policy
- What is the root user in Vault and why it's dangerous to use it?
- How TLS/SSL works
- What is the role of Certificate Authority
- Explain encryption at rest and in transit
- What is a bastion(jump) host?

