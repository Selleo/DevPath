+++
title = "Independent"
weight = 2
+++

{{%bubble %}}

## Independent

**Description:** You can onboard on a project on your own and perform manual tests basing on risk and priorities. You can set up a testing environment locally using git

**Person who successfully completed requirement for given block can:** 
- Recognize proper priorities of encountered risks and issues
- Extend manual testing with other QA activities, such as analysing business requirements
- Support the testing with technical knowledge about application's structure
- Write Gherkin test scenarios in BDD approach
- Support local testing with Browserstack
- Smoothly onboard on any project using provided checklist
- Utilize avilable resources to assure the quality in the most effective way
- Use basic git commands to navigate between branches and handle changes

{{% /bubble%}}

---

## 📦 Testing and process

### 🎓 Learn

- 📗 [risk-based testing](https://www.stickyminds.com/article/risk-based-testing-test-only-what-matters-0)
- 📗 [bug severity vs bug priority](https://www.browserstack.com/guide/bug-severity-vs-priority)
- 📗 [testing business requirements](https://techbeacon.com/app-dev-testing/5-key-attributes-requirements-testing-know-you-code) ([and some more](https://djangostars.com/blog/testing-qa-requirements/))
- 📗 [Pareto principle](https://qarea.com/blog/understanding-pareto-principle-use-software-development)
- 📗 [setting up QA on a project](https://github.com/Selleo/selleo_best_practices/blob/master/quality_assurance/qa_setup_on_project.md)
- 📗 [QA approach video](https://www.youtube.com/watch?v=JYk6p5it6dk&feature=emb_title&ab_channel=SelleoSoftwareOutsourcing)
- 📗 [understanigng implementation details](https://sqa.stackexchange.com/questions/8110/how-much-should-a-tester-understand-and-rely-on-implementation-details)

### 🎤 Interview

- What is the relation between bug's severity and priority?
- Why do we need to set the priorities of reported bugs?
- Why do we need to analyse the risk of impact of a change? How to use technical knowledge to recognize risks? How could domain knowledge help?
- What are the main characteristics of a high-quality business requirements? Why are they so important?
- How can we apply Pareto principle in testing?
- What are some examples of actions to do while onboarding a QA engineer on a project? Why is it worth to keep those things written on a checklist?
- What are the most important of the QA activities? How to manage and prioritize them in case of limited velocity?
- Is it important to know the details of the implementation? How to find a good balance between technical and business knowledge? In what ways the technical knowledge can help the QA engineer?

### 📝 Katas

- Plan your tests of features and fixes. Describe how would you test an example functionality
- Show me an example of a reported issue for which the assignee needed help with reproducing. Is there something that you could do better to avoid such situation?
- Define the risks based on a few examples of functionalities/bugs and set proper priorities
- Testing in real - doing an example task on an examinee's project

---

## 📦 Technical competence

### 🎓 Learn

- 📗 [Browserstack - local testing](https://www.browserstack.com/docs/live/local-testing)
- 📗 [Cucumber/Gherkin - best practices](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/)
- 📗 [Git - getting started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- 📗 [Git - basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- 📗 [Git - writing good commit message](https://juffalow.com/other/write-good-git-commit-message) 
- 📗 [Git - branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- 📗 [Git - Github](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
- 📗 [Git - fetch, pull, push](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
- 📗 [Git - stash, stash apply](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)

### 📝 Katas

- Gather technical information about an error (UI, console, request's response, logs) and recognize which ones are the most useful
- Use gathered information to identify a potential area of the bug (Frontend/Backend)
- Write test scenarios in Gherkin to cover example functionality, using BDD approach
- Clone a repository of one of your projects
- Create a new branch from another branch
- Switch between branches
- Pull the changes
- Tell me how you would push the changes and create a pull request
- Stash the changes
