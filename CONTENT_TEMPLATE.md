# DevPath Template file

This file contains a basic structure template for each level of DevPath. Please use it in your paths and remove redundant parts if needed. Please stick to the template for consistency.

{{%bubble %}}

## Bubble title

**Points:** 1 / 2 / 3 

**Description:** General description what's is the bubble about

**Person who successfully completed requirement for given block can:** 

Use predefined words from the list to describe what person can for the given block:
- Define, name repeat - knowledge
- Explain, Identify, Recognize- comprehension
- Apply, Demonstrate, Use - application
- distinguish, compare, relate - analysis
- design, prepare, compose - synthesis
- evaluate, revise, estimate - evaluation

Sample: 
- Can deliver simple, typical functionalities with little to no additional help
- When asking for help, can present the problem and already explored solutions clearly and in detail
- Can debug simple problems within the application (excluding framework) using the right tooling
- Can present the strenghts and use cases for the framework
- Is capable of leveraging most commonly used standard library capabilities
- Has working knowledge of most commonly used packages/libraries

{{% /bubble%}}

## Basic sections example:
### Level Name - Grade I
## Areas
- Table of contents
----
- 📦 - tools (with a short description of the section)
- 🎓 - learn (mainly links)
  - 📗 - material to read (aka required)
  - 📙 - nice to read material (aka optional)
- 🎤 - interview (list of questions that verifies the skill)
- 📝 - katas (jobs that verifies the skill)

----

> Sample:

# Junior - level I

## Areas

**Tools**

- Work environment
- IDE

**Language & Browser API**

- JavaScript Basics

---

## 📦 Tools / Work environment

Know your environment (operating system, terminal, basic command lines, running docker on your machine). Ensure you are able to type with all you fingers, and without looking at the keyboard. Improve your everyday workflow.

### 🎓 Learn

- OS - Mac (or other)
  - 📗 [macos](https://support.apple.com/macos)
  - 📗 [mac shortcuts](https://support.apple.com/en-us/HT201236)

- Workflow
  - 📗 [the art of command line: sections: “Basic” & “Everyday Use” & “Processing files and data” (](https://github.com/jlevy/the-art-of-command-line)[oh my zsh](https://github.com/robbyrussell/oh-my-zsh), 
    - documentation via tldr/man or [dash](https://kapeli.com/dash) or [devdocs.io](https://devdocs.io/)
  - 📙 [typing](https://www.keybr.com/)


### 🎤 Interview

- [typing](https://www.keybr.com/)
- Tell me about your environment, what makes it productive one?
- How docker helps with local development?
- What is the use case of environment variable `PATH` and how you can debug it?

### 📝 Katas

- Do you have any plans to improve your productivity? Show me a 3 months plan with steps you would like to implement

---

## 📦 Tools / IDE

Know your editor - below are materials for VSCode, but you can choose other. Ensure you know basic keyboard shortcuts, and you ide / editor is configured in a manner that supports frontend development.

### 🎓 Learn

- 📗 [vscode using & customizing](https://github.com/mike-works/vscode-fundamentals/tree/master/docs) (**Usefull Extensions:** ESLint, Sass, Prettier, Jest)
- 📙 [intro to vim: from chapter: "background", to chapter "save & exit"](https://www.turnkeylinux.org/blog/vim-tutorial)
- 📙 [practice vim](https://www.openvim.com/)

### 🎤 Interview

- Why do you use linters?

### 📝 Katas

- Walk me through your IDE
    - what features you use the most often
    - how did you configure it
    - what plugins do you use
    - Is there anything unique

---

## 📦 Tools / Browser Tools

Read about how the web works - you do not need to remember all the details, just familiar yourself with the concept, and remember where you can find more. Read the documentation for dev tools - to have a overview about what is possible.

### 🎓 Learn

- 📗 [how the web works](https://github.com/vasanthk/how-web-works)
- 📗 [what web can do today](https://whatwebcando.today/)
- 📗 choose your tool:
    - **Chrome DevTools**
        - 📗 [crash course](https://www.youtube.com/watch?v=x4q86IjJFag)
        - 📗 [official guide](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/) - Home/ Open Dev tools / DevTools for beginners / CSS / JavaScript / Console / Network / HTML
    - **Firefox Developer tools**
        - 📗 [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
        - 📗 [Core Tools](https://developer.mozilla.org/en-US/docs/Tools) - Page inspector / Web Console / JavaScript Debugger / Network Monitor

### 🎤 Interview

- What did you learn from the article “how web works”?
- Is there anything interesting your found in the page “what web can do today?”

### 📝 Katas

- How dev tools will help you develop and debug the app? (Inspector / console / debugger / network / break points usage)

---

## 📦 Tools / GIT CLI

Be proficient in dealing with GIT from command line - only chapters mention below. For exercises do as much as think you should.

### 🎓 Learn

- 📗 [Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- 📗 [Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- 📗 [Writing Good Commit Message](https://juffalow.com/other/write-good-git-commit-message) 

### 🎤 Interview

- What is specific about Git (DVCS in general)
- Can you show me your git config?
- How you like browse git history?
- Main stages files can reside in?
- Why and how we should ignore certain files from git history?
- You forgot to include “changelog.md” in your commit, how can you fix it?

### 📝 Katas

- [Labs from 1 to 49](http://gitimmersion.com/)
- [Git Katas](https://github.com/praqma-training/git-katas)
- Are you using git prefixes? Show example in your project

---

## 📦 Language & Browser API / JavaScript Basic

Familiarize yourself with the concepts from the book, be able to explain then, and give an example where you would use it. Have a decent skill in writing solutions & tests in JavaScript.

### 🎓 Learn

- 📗 [Eloquent JavaScript](http://eloquentJavaScript.net/) ([our crash course](https://github.com/miksturait/od-zera-do-js-developera))
    - **Optional**
        - [Project: A Programming Language](http://eloquentJavaScript.net/12_language.html)
        - [Drawing on Canvas](http://eloquentJavaScript.net/17_canvas.html)
        - [Http and the forms](http://eloquentJavaScript.net/18_http.html)
        - [Project: Pixlr editor](http://eloquentJavaScript.net/19_paint.html)
- 📙 [Introduction to ES6+](https://scrimba.com/g/gintrotoes6)

### 🎤 Interview

- Software development in general:
  - How you would explain 5 rules of programming in your own words?
  - What is your role in Scrum team and Scrum events?
  - Could you guide me with your own words, through [Joel Spolsky Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)
- JavaScript:
  - Explain differences between JavaScript, EcmaScrpt & TypeScript (high-level)
  - Explain what is scope. What you should avoid in terms of scope?

### 📝 Katas

- Solve 5 problems (with tests coverage) from [the list](https://github.com/mre/the-coding-interview/tree/master/problems)