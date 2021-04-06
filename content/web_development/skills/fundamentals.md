+++
title = "Fundamentals"
+++

{{%bubble %}}

## Interview

**Description:** You understand basic concepts around web development

**Person who successfully completed requirement for given block can:** 

- Can configure working environment
- Can effectievly configure & use IDE
- Can explain how browser works
- Can identify HTTP issues with browser tools
- Can use GIT versioning
- Can run an web application locally

{{% /bubble%}}

## Areas

**Tools**

- Work environment
- IDE
- Browser tools
- GIT CLI
- Docker

**Browser API**

- HTML
- Browser events

**Networking**

- HTTP

**Framework & Libs**

- Framework A Level I

---

## 📦 Tools / Work environment

Know your environment (operating system, terminal, basic command lines, running docker on your machine). Ensure you are able to type with all you fingers, and without looking at the keyboard. Improve your everyday workflow. Have fluency in basic terminal usage.

### 🎓 Learn

- Workflow
  - 📗 [the art of command line: sections: “Basic” & “Everyday Use” & “Processing files and data” (](https://github.com/jlevy/the-art-of-command-line)[oh my zsh](https://github.com/robbyrussell/oh-my-zsh), 
    - documentation via tldr/man or [dash](https://kapeli.com/dash) or [devdocs.io](https://devdocs.io/), 
    - editor - vim || nano, pipes, 
    - redirecting input & output, glob expansions, job management, file management, grep, which, pwd, command line shortcuts, 
    - directory navigation, environment variables (especially PATH) 
    - [fuzzy search finder with zsh](https://github.com/junegunn/fzf), 
    - permissions (and switching users sudo su), find, sort, tail)
  - 📗 [iterm, tmux, terminal - shortcuts, layout, sessions, kitty](https://iterm2.com/) pick one
  - 📙 [typing](https://www.keybr.com/)
  - 📙 [command linter](https://github.com/riscy/command_line_lint)
  - 📙 [shorcutfoo](https://www.shortcutfoo.com/)
- 📗 [General usage of Linux](/common/linux.md) (Junior 1)
- Mac Only:
    - 📗 [macos](https://support.apple.com/macos)
    - 📗 [mac shortcuts](https://support.apple.com/en-us/HT201236)
    - 📗 [brew - package manager (](https://brew.sh/)[new to mac](https://support.apple.com/explore/new-to-mac), brew install, brew cask install)

### 🎤 Interview

- What is the use case of environment variable `PATH` and how you can debug it?
- What editor (in terminal) did you choose, and why?
- What are the most useful terminal shortcut for you?
- What is the best way to access documentation?

### 📝 Katas

- Go through [Linux Junior 1 requirements](/common/linux/)
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
- Tell me about your environment, what makes it productive one?

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
        - Home/ Open Dev tools / DevTools for beginners / CSS / JavaScript / Console / Network / HTML
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

Go throght [common git requirements](/common/git/).

---

## 📦 Tools / Docker

### 🎓 Learn

- 📗 [docker](https://docs.docker.com/docker-for-mac/)
- 📗 [docker compose](https://docs.docker.com/compose/reference/overview/)

### 🎤 Interview

- How docker helps with local development?
- Explain basic usage of docker 
    - build 
    - ps 
    - run 
    - kill 
    - restart 
    - compose 
    - images 
    - exec

### 📝 Katas

---

## 📦 Networking / HTTP

### 🎓 Learn

- 📗 [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP)
- 📗 [Cookies](https://JavaScript.info/cookie)

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
