+++
aliases = ["frontend","javascript","typescript","react","ember","css", "independent"]
title = "Independent - level I"
author = "Selleo"
+++

## Areas

**Competence**

- Documentation
- Deployment
- Debugging

**Tools**

- CI tools

**Best practices**

- Composing software
- Patterns

**Networking**

- JSON API

**Testing**

- Integration

**Framework & Libs**

- Framework A Level II

---

## 📦 Competence / Documentation

### 🎓 Learn

- 📗 [Documentation](https://www.writethedocs.org/guide/)
- 📗 [Documentation via project flow](https://medium.com/selleo/github-on-steroids-video-70a957de804f)
- 📗 [Sem versioning](https://semver.org/)
- 📗 [JDoc](https://github.com/jsdoc/jsdoc)


### 🎤 Interview

- how to write good commit message?
- how to use PR / issue templates
- explain your git flow on the project and what it brings in terms of documentation
- how to document your libs (jdoc/tests/type definitions)

### 📝 Katas

- how to use GitHub commit message to attach your changes to the issues? (show git commit reference example)
- present your contribution in project documentation
- how do you maintain changelogs of the application? Present best example from your project

---

## 📦 Competence / Deployment

### 🎓 Learn

- 📗 [Firebase deploy](https://firebase.google.com/docs/hosting/deploying)
- 📗 [Gatsby to Heroku](https://www.gatsbyjs.org/docs/deploying-to-heroku/)
- 📗 [Gatsby to S3/CloudFront](https://www.gatsbyjs.org/docs/deploying-to-s3-cloudfront/)
- 📗 [Understand Package.json & lock](https://docs.npmjs.com/files/package.json)
- 📗 [NPM publishing](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- 📗 [Get familiar with NCU](https://github.com/tjunnone/npm-check-updates)
- 📗 [Get familiar with NPX](https://www.npmjs.com/package/npx)

### 🎤 Interview

- Explain deploy flow to the AppStore / Google Play (`React Native case only`)
- What is your package.json update strategy?
- Explain role of `scripts` in **package.json**
- How would you deal with `local package`/`tag specific`/`commit specific`/`branch specific` reference in NPM?
- Explain commands in **npm** (pick 5)

### 📝 Katas

- Deploy simple application via CI (via **CLI,** to FireBase / CloudFront / Heroku - `pick one`)

---

## 📦 Competence / Debugging

### 🎓 Learn

- 📗 [Book](https://www.amazon.com/Effective-Debugging-Specific-Software-Development-ebook-dp-B01HMR617O/dp/B01HMR617O/ref=mt_kindle?_encoding=UTF8&me=&qid=)
- 📗 [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps)

### 🎤 Interview

- Explain/show breakpoints usage (source code / DOM modifications)
- How source maps can help us while debugging our front-end code?
- Explain DOM substates

### 📝 Katas

- Where you can clear App state/assets management
- Where you can check incoming request headers and payload
- Present simple use case for framework specific toolset
- Inspect styling
- Show sample usage of Chrome console

---

## 📦 Tools / CI tools

### 🎓 Learn

- 📗 [Documentation](https://docs.travis-ci.com/)

### 🎤 Interview

- Explain the difference between:
    - continuous integration
    - continuous delivery
    - continuous deployment

### 📝 Katas

- **[Travis](https://docs.travis-ci.com/) (or CircleCi / CodeShip etc.)**
    - configure your project to run tests automatically on travis-org after each commit to the repository
    - configure your project to deploy your code automatically after build passed

---

## 📦 **Testing / Integration**

## 🎓 Learn

- 📗 [Integration tests in React](https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894)
- 📗 [Integration tests in Ember](https://github.com/PoslinskiNet/ember-testing-guide)

### 🎤 Interview

- Explain the role of integration tests

## 📝 Katas

- Write integration test and then matching component in the framework of your choice

---

## 📦 **Best practices / Composing software**

### 🎓 Learn

- 📗 [Composing Software](https://leanpub.com/composingsoftware)
- 📗 [How to improve analytical skills in general](https://www.wikihow.com/Improve-Analytical-Skills)
- 📗 [Currying](https://www.sitepoint.com/currying-in-functional-javascript/)
- 📗 [Functors & Monads](https://hackernoon.com/functional-javascript-functors-monads-and-promises-679ce2ab8abe)
- 📗 [Functors & Monads in pictures](https://medium.com/@tzehsiang/javascript-functor-applicative-monads-in-pictures-b567c6415221)
- 📗 [Function & object composition](https://alligator.io/js/class-composition/)
- 📗 [Factories](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- 📙 [Refactoring: Improving the design of existing code](https://www.amazon.com/dp/B07LCM8RG2/)

### 🎤 Interview

- Describe **at least 5** patterns and examples of usage (and/or libraries that you are using are build on top of those patterns)
    - Pure Function
    - Function Composition
    - Curried Function
    - Immutability
    - Side Effects
    - Higher Order Functions
    - Functors, Lists
    - Monads
    - Encapsulation
    - Factory Functions

### 📝 Katas

- Solve and present at least 3 of [katas](https://www.codewars.com/collections/javascript-patterns)

## 📦 **Best practices / Patterns**

### 🎓 Learn

- 📗 [Patterns - GoF](https://www.dofactory.com/javascript/design-patterns)
- 📗 [Patterns - GoF - implementation in modern javascript](https://github.com/fbeline/Design-Patterns-JS)
- 📙 [Mastering JavaScript Design Patterns](https://www.amazon.com/Mastering-JavaScript-Design-Patterns-applications-ebook/dp/B07D6LQNK3)


### 🎤 Interview

- Describe at least 5 patterns and usage examples (and/or libraries that you are using are build on top of those patterns):
  - Prototype
  - Singleton
  - Adapter
  - Decorator
  - Facade
  - Proxy
  - Command
  - Iterator
  - Observer
- Which pattern would you use (and why) to be able to easily switch lib SDK used behind your code interface? Write a tested class ( that has a `get` method which returns data with `$.get`. Then, without changing a test, use in its inner implementation native JS `fetch` (test should pass).

### 📝 Katas

- [**Collection of Katas**](https://www.codewars.com/collections/javascript-patterns)

## 📦 Networking / JSON API

### 🎓 Learn

- 📗 [Documentation](https://jsonapi.org/)

### 🎤 Interview

- Explain role of `links`, `data`, `included`, `errors`
- Explain default structure of entity payload (`type`, `id`, `attributes` etc.)
- How to deal with pagination?
- How to deal with search?
- How to deal with sort?
- How to deal with includes?
- How to deal with errors?
- How to create/update/delete resource?
- What is the role of sparse fieldsets?
- What is the default valid header in JSON API spec?

### 📝 Katas

- Provide sample usage of `data` attribute