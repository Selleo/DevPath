+++
aliases = ["frontend","javascript","typescript","react","ember","css", "junior"]
title = "Junior - level I"
author = "Selleo"
+++

## Areas

**Tools**

- Work environment
- IDE
- Browser tools
- GIT CLI

**Language & Browser API**

- JavaScript Basics
- HTML
- Browser events

**Networking**

- HTTP

**Backend**

- Backend for Frontend developer

**Testing**

- Unit

**Styling**

- Styling (Level I)

**Framework & Libs**

- Framework A Level I

---

## 📦 Tools / Work environment

Know your environment (operating system, terminal, basic command lines, running docker on your machine). Ensure you are able to type with all you fingers, and without looking at the keyboard. Improve your everyday workflow.

### 🎓 Learn

- OS - Mac (or other)
  - 📗 [macos](https://support.apple.com/macos)
  - 📗 [mac shortcuts](https://support.apple.com/en-us/HT201236)
  - 📗 [brew - package manager (](https://brew.sh/)[new to mac](https://support.apple.com/explore/new-to-mac), brew install, brew cask install)
  - 📗 [setup your mac for development and learn about apps](https://github.com/Selleo/DevPath/blob/master/frontend_developer/01_tools/01_mac_setup.md)

- Workflow
  - 📗 [the art of command line: sections: “Basic” & “Everyday Use” & “Processing files and data” (](https://github.com/jlevy/the-art-of-command-line)[oh my zsh](https://github.com/robbyrussell/oh-my-zsh), 
    - documentation via tldr/man or [dash](https://kapeli.com/dash) or [devdocs.io](https://devdocs.io/), 
    - editor - vim || nano, pipes, 
    - redirecting input & output, glob expansions, job management, file management, grep, which, pwd, command line shortcuts, 
    - directory navigation, environment variables (especially PATH) 
    - [fuzzy search finder with zsh](https://github.com/junegunn/fzf), 
    - permissions (and switching users sudo su), find, sort, tail)
  - 📗 [docker](https://docs.docker.com/docker-for-mac/)
  - 📗 [docker compose](https://docs.docker.com/compose/reference/overview/)
  - 📗 [iterm, tmux, terminal - shortcuts, layout, sessions, kitty](https://iterm2.com/) pick one
  - 📙 [typing](https://www.keybr.com/)
  - 📙 [command linter](https://github.com/riscy/command_line_lint)
  - 📙 [shorcutfoo](https://www.shortcutfoo.com/)

### 🎤 Interview

- [typing](https://www.keybr.com/)
- Tell me about your environment, what makes it productive one?
- How docker helps with local development?
- What is the use case of environment variable `PATH` and how you can debug it?
- Explain basic usage of docker (`build / ps / run / kill / restart / compose / images / exec`)
- What editor (in terminal) did you choose, and why?
- What are the most useful terminal shortcuts for you?
- What is the best way to access documentation?

### 📝 Katas

- Do you have any plans to improve your productivity? Show me a 3 months plan with steps you would like to implement

---

## 📦 Tools / IDE

Know your editor - below are materials for VSCode, but you can choose other. Ensure you know basic keyboard shortcuts, and you ide / editor is configured in a manner that supports frontend development.

### 🎓 Learn

- 📗 [vscode using & customizing](https://github.com/mike-works/vscode-fundamentals/tree/master/docs) (**Usefull Extensions:** ESLint, Sass, Prettier, Jest)
- 📙 [intro to vim: from chapter: "background", to chapter "save & exit"](https://www.turnkeylinux.org/blog/vim-tutorial)
- 📙 [practice vim](https://www.openvim.com/)
- 📙 [vim emulator from vscode](https://github.com/VSCodeVim/Vim)
- 📙 [install Tab Nine](https://tabnine.com/)
- 📙 [enable semantic completions](https://tabnine.com/semantic)

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
- 📗 [Prefixes](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- 📗 [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- 📗 [Distributed Git](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- 📗 [Github](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)

### 🎤 Interview

- What is specific about Git (DVCS in general)
- Can you show me your git config?
- How you like browse git history?
- Main stages files can reside in?
- Why and how we should ignore certain files from git history?
- You forgot to include “changelog.md” in your commit, how can you fix it?
- How you can revert your local changes?
- What is your workflow that ensure you have all the changes from the GitHub locally?
- When you release the version of the software how you can annotate that in the source control.
- Why it is beneficial to use git plugin for zsh?
- How do you use local and remote branches to your advance?
- What is the difference between ‘master’ vs ‘origin/master’ pointer?
- What is difference between mergin branch and rebasing onto?
- How do you resolve conflicts when applying changes from other branch?
- When rebase is not a good idea?
- How to cleanup local branches and references to non-existing remote branches?
- What is the difference between pull and fetch?
- What are tracking branches and how you can setup one?
- Why the commit message matter?
- What is cherry picking, and when you used it?
- Do you have two factor authentication on your GitHub account configured?
- How do you use Github to advance development process?

### 📝 Katas

- [Labs from 1 to 49](http://gitimmersion.com/)
- [Git Katas](https://github.com/praqma-training/git-katas)
- Are you using git prefixes? Show example in your project

---

## 📦 Language & Browser API / JavaScript Basic

Familiarize yourself with the concepts from the book, be able to explain then, and give an example where you would use it. Have a decent skill in writing solutions & tests in javascript.

### 🎓 Learn

- 📗 [Professional Software Developer](https://mixmastamyk.bitbucket.io/pro_soft_dev/intro.html)
- 📗 [5 rules of programming](http://users.ece.utexas.edu/~adnan/pike.html)
- 📗 [Eloquent JavaScript](http://eloquentjavascript.net/) ([our crash course](https://github.com/miksturait/od-zera-do-js-developera))
    - **Optional**
        - [Project: A Programming Language](http://eloquentjavascript.net/12_language.html)
        - [Drawing on Canvas](http://eloquentjavascript.net/17_canvas.html)
        - [Http and the forms](http://eloquentjavascript.net/18_http.html)
        - [Project: Pixlr editor](http://eloquentjavascript.net/19_paint.html)
- 📙 [Introduction to ES6+](https://scrimba.com/g/gintrotoes6)
- 📙 [Introduction to Regulax Expressions](https://scrimba.com/g/gregularexpressions)
- 📙 [regular expresions](http://regexr.com/) as much as you need to practice

### 🎤 Interview

- Software development in general:
  - How you would explain 5 rules of programming in your own words?
  - Why the code needs to be testable? (And how TDD and BDD might help)
  - What kind of feedback loops can be included in the software development process that will improve quality and the speed of the development?
  - How Continues Delivery impact sofware development?
  - Why is beneficial to use Scrum as softwarer development methodology?
  - What is your role in Scrum team and Scrum events?
  - Could you guide me with your own words, through [Joel Spolsky Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)
- JavaScript:
  - Explain differences between JavaScript, EcmaScrpt & TypeScript (high-level)
  - Explain what is scope. What you should avoid in terms of scope?
  - Explain differences between `var`, `let`, `const`
  - Explain `this`
  - Explain the difference between `function` & `arrow function`
  - How the `closure` works
  - Explain modules. How `require` & `import` works?
  - Explain JS hoisting (does it also apply to Class?)
  - Explain the  asynchronous programming
  - What `async` does?
  - Elaborate about examples of built-in higher-order functions

### 📝 Katas

- Solve 5 problems (with tests coverage) from [the list](https://github.com/mre/the-coding-interview/tree/master/problems)

---

## 📦 Networking / HTTP

### 🎓 Learn

- 📗 [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP)

### 🎤 Interview

- what 2xx tells you?
- what 3xx usually does?
- what 4xx tells you?
- what 5xx tells you?
- What E-tag is responsible for?
- elaborate about HEAD method?
- elaborate about OPTIONS method?
- What DNS is responsible for?
- How would you use cookies in your app?

### 📝 Katas

- Show me how would you access web socket traffic information in the browser

---

## 📦 Backend / Backend for Frontend developer

Developer knows how to run the backend based on the project documentation (it doesn't have to be any specific framework project, but you need to proove that you know how to achieve this)

### 🎓 Learn

- 📗 [rails guide - just learn about the app structure](https://guides.rubyonrails.org/getting_started.html)

### 📝 Katas

- Run your current project backend base on the documentation (it doesn't have to be any specific framework project, but you need to prove that you know how to achieve this)
- RoR example (optional to your current project)
    - install ruby `asdf ruby install 2.6.0 && asdf global ruby 2.6.0`
    - install postgresql `brew install postgresql`
    - fetch rails project `git clone git@github.com:Selleo/selleo-mail-log-api.git`
    - setup the project, based on the readme
    - run the server `bin/rails server`
    - browse the source code (`config/route.rb and app/controllers/**/*.rb`)
    - [run rails project on docker](https://docs.docker.com/compose/rails/)
    - Guide me [through the files of rails app](https://github.com/Selleo/dm3), starting from the endpoint path (eq. `/api/v1/finance/customer-balances`)

---

## 📦 Testing / Unit

### 🎓 Learn

- 📗 [Jest](https://jestjs.io/docs/en/getting-started.html)


### 🎤 Interview

- Explain role of unit tests
- What you should test in unit tests?

### 📝 Katas

- Show example usage of your unit test and describe it
