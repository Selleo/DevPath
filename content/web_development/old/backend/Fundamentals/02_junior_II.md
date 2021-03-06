# Junior - level II

---

## 📦 Memoization

### 🎓 Learn

#### General

- 📗 [Wiki Memoization](https://en.wikipedia.org/wiki/Memoization)
- 📗 [Memoization in javascript](https://scotch.io/tutorials/understanding-memoization-in-javascript)
- 📗 Saving (caching) a result of given method in instance variable for the lifetime of object
- 📗 Used for efficiency / performance improvements
- 📗 Usable for anything but trivial cases, when method is used more than once
- 📗 Memoization might be a risk factor in main, long running process (i.e. production) especially when storing large structures.
- 📗 *Rails-only:* Beware of memoization on class level

#### Rails

- 📙 http://gavinmiller.io/2013/basics-of-ruby-memoization/
- 📙 [4 Simple Memoization Patterns in Ruby](https://www.justinweiss.com/articles/4-simple-memoization-patterns-in-ruby-and-one-gem/)

#### NodeJS

- 📙 [Understanding JavaScript Memoization In 3 Minutes](https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19)
- 📙 [Memoizee](https://www.npmjs.com/package/memoizee)
- 📙 [mem](https://github.com/sindresorhus/mem)

### 📝 Katas

- Implement memoization for a function of your choice.

### 🎤 Interview

- What is memoization?
- Why would you go for memoization?
- What are the risks of memoization?
- Show me an implementation of memoization.

## 📦 Sending emails

### 🎓 Learn

- 📗 Methods of sending emails
  - [ELI5 SMTP](https://www.reddit.com/r/explainlikeimfive/comments/6viyt7/eli5_what_is_smtp/)
  - [What is an SMTP server?](https://sendgrid.com/blog/what-is-an-smtp-server/)
- 📗 Tools for testing emails locally
  - [MailCatcher](https://mailcatcher.me)
  - [LetterOpener - for Rails](https://github.com/ryanb/letter_opener)
- 📗 Concept of "Deliver later"
  - Sending can be slow and blocking if done synchronously
  - Use asynchronous delivery, e.g., [ActiveJob in Rails](https://edgeguides.rubyonrails.org/active_job_basics.html) or [Bull in NodeJS](https://github.com/OptimalBits/bull)
- 📗 [Multipart (HTML/TEXT)](https://litmus.com/blog/reach-more-people-and-improve-your-spam-score-why-multi-part-email-is-important)
    - It can be treated better by SPAM filters
- 📗 3rd party services - check out their extra features, e.g.,  templates, webhooks, tracking
    - [SES](https://aws.amazon.com/ses/)
    - [Sendgrid](https://sendgrid.com)
    - [Mailgun](https://www.mailgun.com/)

#### Rails

- 📙 [Action Mailer Basics](https://guides.rubyonrails.org/action_mailer_basics.html)
- 📙 CSS / Styling emails
  - [roadie-rails](https://github.com/Mange/roadie-rails)
  - [premailer-rails](https://github.com/fphilipe/premailer-rails)

#### NodeJS

- 📙 [nodemailer](https://github.com/nodemailer/nodemailer) - Email sending (no built-in templating)
- 📙 [email-templates](https://github.com/niftylettuce/email-templates)

### 📝 Katas

- Implement mailer in the back-end application
- Setup a solution for testing e-mails locally

### 🎤 Interview

- Show me implemented mailer
- What solutions do you use for sending e-mails?
- What external services can you use for sending e-mails?
- What can you use for local testing of the e-mails?
- How can you add an easy way for stying the e-mails?
- What can you do to delay sending e-mails?
- What is the impact of using multipart emails on the spam score?
- *Rails-only:* Discuss briefly an overview of action mailer, action mailbox and its benefits

## 📦 Static code analysis - Code Style

### 🎓 Learn

#### Ruby

- 📙 [Rubocop](https://github.com/rubocop-hq/rubocop)
- 📙 [Overcommit](https://github.com/sds/overcommit) as a tool to maintain code style before push

#### NodeJS

- 📙 [Prettier](https://prettier.io/)
- 📙 [Prettier pre-commit hook](https://prettier.io/docs/en/precommit.html)

### 📝 Katas

- Setup a solution for doing an automatic code style analysis and correction
  - directory exclusion
  - style (rule) configuration, i.e. trailing dot location
  - metrics (rule) configuration, i.e. line length

### 🎤 Interview

- Show me your config for the code style analysis
  - directory exclusion
  - style (rule) configuration, i.e. trailing dot location
  - metrics (rule) configuration, i.e. line length
- What are the reasons for doing automatic code style check?
- How can you keep consistent code style automatically?
- When would you disable a rule on demand?
- Should code style analysis be enabled on CI?

## 📦 Law of Demeter (principle of least knowledge)

### 🎓 Learn

- 📗 [Law of Demeter video](https://thoughtbot.com/upcase/videos/law-of-demeter)
- 📗 [Demeter’s Law: Don’t talk to strangers!](https://dev.to/carlillo/demeters-law-dont-talk-to-strangers-10ep)

#### 🔍 Short Summary

- Prevents tight, multi-layer coupling
  - Where context changes completely
  - i.e. referencing `Worker -> Service -> Wrapper -> Client -> Gem -> CONST` from one place
- Should surface at testing level / can be indicator of not applying TDD
- Not a problem for
  - transforming primitives
  - builder pattern (i.e. AREL)
- Relations are not that bad
  - Especially for well established schema
  - Base class does not change after all in many cases
- Can be addressed by
  - Delegation (hiding)
  - Dependency injection
  - Database views (for DB model relationships)

### 📝 Katas

- Find and refactor piece of code that doesn't follow the LoD or create an artificial
    example.

### 🎤 Interview

- What is Low of Demeter (LoD) about?
- What does LoD prevents?
- How can LoD be addressed?
- When does not LoD apply?
- Show me a practical example of applying the LoD.

## 📦 Service Object

### 🎓 Learn

- 📗 [Essential RubyOnRails patterns — part 1: Service Objects](https://medium.com/selleo/essential-rubyonrails-patterns-part-1-service-objects-1af9f9573ca1)
- 📗 [Organize your app with service objects](http://chrisholtz.com/blog/organize-your-app-with-service-objects/)
- 📗 [Service objects](https://gist.github.com/blaix/5764401)

#### Rails

- 📙 [Selleo Pattern - Service](https://github.com/Selleo/pattern#service)

#### NodeJS

- 📙 [7 Patterns to Refactor JavaScript Applications: Service Objects](https://crushlovely.com/journal/7-patterns-to-refactor-javascript-applications-service-objects)

#### 🔍 Short Summary

- Two major responsibilites
  - Aggregating steps of given process
  - Implementing one step of process
- Naming after commands
  - i.e. `PasswordResetter` vs `ResetPassword`
- Should implement one core method
  - i.e. `call`, `perform`, `execute`, `run`
  - focus on its readability as list of steps
- Usually we should not care what the return value is, but if the process just succeeded at all
  - Communicate failures through exceptions
  - Instance usually is not used, therefore we can call the class method directly
    - *Rails-only:* `ResetPassword.call` vs `ResetPassword.new.call`
- Beware of extensive conditional logic in single service object

### 📝 Katas

- Implement one service object for a problem of your choice.

### 🎤 Interview

- What is the Service Object pattern?
- Describe an implementation of the service object pattern.
- Why and when would I apply the Service Object pattern?
- How can I name the class representing the service and exposed within?
- Do I care about the returned value by the service?
- Should I create an instance of a service object?
- Show me implementation of the service object.

## 📦 Decorator

### 🎓 Learn

- 📗 [Wiki Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)

#### Rails

- 📙 [Draper](https://github.com/drapergem/draper)
- 📙 [Evaluating Alternative Decorator Implementations In Ruby](https://robots.thoughtbot.com/evaluating-alternative-decorator-implementations-in)

#### NodeJS

- 📙 [The Decorator Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html)

#### 🔍 Short Summary

- Beware not to overuse it
- Provides contextualized, lightweight object wrapper (in many cases the "context" is view layer)
- Extends/Reduces/Changes interface of wrapped object:
  - For presentation (i.e. formatting)
  - As object scoped helper methods (i.e. returns DOM classes)
  - For access control (context is user in such case)
  - Might be used in context of DDD (context is domain in such case)
- Should be simple. Beware of:
  - returning HTML
  - querying DB / APIs

### 📝 Katas

- Implement the decorator pattern in a problem of your choice.

### 🎤 Interview

- What is the decorator pattern?
- Tell me when I could apply the pattern.
- How could I implement the decorator pattern?
- Show me implementation of the decorator pattern.

## 📦 JSON

### 🎓 Learn

- 📗 [What is JSON?](https://www.w3schools.com/whatis/whatis_json.asp)
- 📗 [What is XML?](https://www.w3schools.com/whatis/whatis_xml.asp)
- 📗 [JSON Schema](https://json-schema.org/)
- 📗 Libraries for converting CamelCased to snake_case or dash-cashed
  - [Rails - OliveBranch](https://github.com/vigetlabs/olive_branch)
  - [NodeJS - camelcase](https://www.npmjs.com/package/camelcase)
  - [NodeJS - humps](https://www.npmjs.com/package/humps)
- 📗 Check out prettifiers
  - [./jq](https://stedolan.github.io/jq/)
  - [jsonformatter webpage](https://jsonformatter.curiousconcept.com/)

#### 🔍 Short Summary

- JSON stands for "JavaScript Object Notation"
- Readable way to represent objects in text
  - in frontend
  - in transport layer (i.e. JSON API)
- Remember about
  - Always use double quotes
  - No space after key

### 📝 Katas

- Setup a keys converter in the application.

### 🎤 Interview

- What is the JSON syntax - what to remember about?
- How can I prettify JSON?
- What is JSON Schema?
- What is the difference between JSON and XML?
- What could I use for converting keys (CamelCased to snake_case or dash-cashed)?
- Show me a practical application of the keys converter.

## 📦 Guard Clause

### 🎓 Learn

- 📗 [Replace Nested Conditional with Guard Clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
- 📗 [Guard Clause from wiki.c2.com](https://wiki.c2.com/?GuardClause)

#### 🔍 Short Summary

- `return if`
- Simplifies conditional expressions
- Improves readability of methods that should stop execution early
- It is preferrable to keep guard closes at the beginning of method body

### 📝 Katas

- Refactor one method to use guard clause.

### 🎤 Interview

- What is a guard clause?
- Why would I use a guard clause?
- Show me one example where you used a guard clause.
