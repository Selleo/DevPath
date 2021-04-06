+++
title = "SysOps basics"
+++

{{%bubble %}}

## SysOps basics

**Required**

**Description:** You have basic working knowledge of general SysOps, Linux concepts. You can perform the most common tasks in those areas.

**Person who successfully completed requirement for given block can:**

- Understand DNS and different record types
- Explain basic networking concepts(masks, private/public network, etc.)
- Work with common Linux tools

{{% /bubble%}}

### 🎓 Learn
- [curl](https://linux.die.net/man/1/curl)
- [wget](https://linux.die.net/man/1/wget)
- [scp](https://linux.die.net/man/1/scp)
- [ssh](https://linux.die.net/man/1/ssh)
- [dig](https://linux.die.net/man/1/dig)
- [dig explained](https://phoenixnap.com/kb/linux-dig-command-examples)
- [subnets](https://www.techopedia.com/6/28587/internet/8-steps-to-understanding-ip-subnetting)
- https://cidr.xyz/
- [Bash Scripting Tutorial for Beginners](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
#### Setting hostname/domain name of own local server

Edit one of these files (depends on your OS):

- `/etc/hosts` - OSX (some says that it's valid for Debians as well)
- `/ets/hostname` - Debian familly OS
and add
```
127.0.0.1       example.dev
```
and you can ping `example.dev` or use the address in a web browser

### 📝 Katas
- Explain output of `dig` command
- Learn fundamentals of VIM/nano
- Setup localhost domain
- Split network into 8 subnets(network address 10.10.0.0/16). Explain your tought process.
- Simple bash script. TODO
- Learn how to use following commands:
	- curl
	- wget
	- dig
	- scp
	- ssh

### 🎤 Interview
 - What DNS is and how it works?
 - Explain DNS record types (CNAME, ALIAS, A, MX, SOA, NS, TXT)
 - What the . at the end of the host name means?
 - Explain how masking in network works and what is it used for?
 - What is the difference between private and public networks?
 - What is NAT?
 - Do you know what are the network layers?
