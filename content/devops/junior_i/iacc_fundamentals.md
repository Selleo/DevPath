+++
title = "IaaC Fundamentals"
+++

{{%bubble %}}

## IaaC Fundamentals

**Required**

**Description:** You understand what is IaaC and what benefits it gives. You can use it with minimal help in your day-to-day work.

**Person which succesfully completed requirement for given block can:**

- Understand infrastructure as code (IaC) concepts
- Understand Terraform's purpose (vs other IaC)
- Work with Terraform CLI
- Understand general Terraform concepts, such as state, providers, etc.
- Use basic parts of Terraform such as modules, variables, outputs, local variables, etc.
- Evaluate already existing Terraform code and apply changes to it

{{% /bubble%}}


### 🎓 Learn
- 📗 [Terraform](https://www.terraform.io/)
- 📗 [Terraform tutorials](https://learn.hashicorp.com/terraform)
- 📗 [Terraform tutorials Get Started - AWS](https://learn.hashicorp.com/collections/terraform/aws-get-started)
- 📗 [Terraform certification review guide](https://learn.hashicorp.com/tutorials/terraform/associate-review?in=terraform/certification)
- 📗 [Terraform providers](https://www.terraform.io/docs/providers/index.html)
- 📗 [Terraform AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- 📗 [Terraform CLI Documentation](https://www.terraform.io/docs/cli-index.html)

### 📝 Katas
  - Build a small AWS infrastructure (based on requirements described in [AWS Service Basics](/devops/junior_i/aws_services_basic_frontend/)) using Terraform, while doing it:
    - Use local and remote backend
    - Demonstrate using multiple providers
    - Interact with module inputs and outputs
    - Define custom module
    - Use community modules
    - Demonstrate use of variables and outputs
    - Understand the use of collection and structural types
    - Use resource addressing and resource parameters to connect resources together
    - Use Terraform built-in functions to write configuration
  - Show and explain the different Terraform CLI commands:
    * init
    * validate
    * plan
    * apply
    * destroy
    * import
    * taint
    * validate
    * state show
    * state mv

### 🎤 Interview
  - Explain what IaaC is
  - Describe advantages of IaaC patterns
  - Understand Terraform's purpose (vs other IaaC)
  - Explain multi-cloud and provider-agnostic benefits
  - Explain the benefits of state
  - Describe Terraform workflow ( Write -> Plan -> Create )
  - Describe default local backend
  - Outline state locking
  - Describe secure secret injection best practice
  - Describe remote state storage mechanisms and supported standard backends
  - Describe effect of Terraform refresh on state
