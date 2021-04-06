+++
title = "JavaScript/Ember - Mastery"
weight = 3
+++

{{%bubble %}}

## Framework & Language Mastery

**Points:** 2 

**Description:** You can demonstrate the complete knowledge of the specific framework. You can freely customize it and extend it if needed.

**Person who successfully completed requirement for given block can:** 

- TODO

{{% /bubble%}}

After finishing this course you should be comfortable with components patterns, addons, engines or how to write an acceptance test

## Areas
**Patterns**
- Know is the role of higher order components, how to use them
- Know about contextual component,
- Know about presentation components,
- Know about container components

**Authorization**
- Know how to implement basic authorization
- Know how to verify permissions for given user

**Addons**
- Know role of addons in Ember ecosystem
- Know difference between public addon and in-repo addon
- Know how to create own addon

**Engines**
- Know role of engines in Ember ecosystem
- Know how to use engines
- Know limitations of engines

**Initializers**
- Know role of initilizers in the application
- Know differences between application initializer and application instance initializer
- Know how to create own initializer and use it

**Acceptance Tests**
- Know what should be tested
- Know how to test redirects between routes
- Know how to test general application flow
- Know how use functions from `ember-test-helpers`
- Know disadvantages of acceptance tests
---

## 📦 Ember / Patterns

Knows different patterns in Ember.js

### 🎓 Learn

- 📗 [Higher order components](http://slides.com/miguelcamba/higher-order-components)
- 📗 [Component patterns](https://medium.com/macsour/components-patterns-in-ember-js-5e6fc6eea28f)

### 🎤 Interview

- What is the higher order component? Elaborate about one use-case
- What is the usecase of presentation component
- What is the usecase of container component
- What is the usecase of contextual component

### 📝 Katas
Build a higher order component to display various information about user (user: imageUrl, name, age, favouriteDish)
- it should have an `header` component that will return given greeting and user name e.g `Hello Tom!` or `Hi Tom!`
- it should have `details` property that will hold user object so I can do `details.favouriteDish`
- it should have `footer` component that will display a given text / component on invocation

---
## 📦 Ember / Authorization

Basics of the authorization in your application

### 🎓 Learn

- 📗 [Ember Can](https://github.com/minutebase/ember-can)

### 🎤 Interview

- How can you check if user has enough permisson to perfom a given action
- What is the role of `Ability`
- What helpers are provided by Ember Can

---

## 📦 Ember / Addons

Understand role of addons in Ember.js.

### 🎓 Learn

- 📗 [Addons](https://guides.emberjs.com/release/addons-and-dependencies/#toc_addons)
- 📗 [Writing addons](https://cli.emberjs.com/release/writing-addons/)

### 🎤 Interview

- What is the role of addons in Ember.js
- What is the difference between in-repo and public addon
- How can you use addons in your addon?
- Are you able to write templates for addons? Elaborate how
- What is the role of `dummy` folder in addon tests

### 📝 Katas
- Show an addon created by you, it may be in-repo or published one

---

## 📦 Ember / Engines

Usage of engines in Ember.js

### 🎓 Learn

- 📗 [Engines](https://ember-engines.com/docs)
- 📗 [Core concepts](https://ember-engines.com/docs/dependencies)

### 🎤 Interview
- What is the role of engines?
- How can you mount an engine into your application
- What is the difference between in-repo and published engine
- Explain concept of engines isolation
- What types of engines do you know. Elaborate about them

---

## 📦 Ember / Initializers

Understand an idea of initializers, how to use them

### 🎓 Learn
- 📗 [Overview]https://guides.emberjs.com/release/applications/initializers/)

### 🎤 Interview
- What is the role of initializers?
- What is the difference between application and application instance initializer

### 📝 Katas
- Implement a initializer to make your service available for every component in the app. E.g notification service

---

## 📦 Ember / Acceptance Tests

How to implement an acceptance test in Ember.js

### 🎓 Learn
- 📗 [Overview](https://guides.emberjs.com/release/testing/testing-application/)
- 📗 [Ember Test Helpers](https://github.com/emberjs/ember-test-helpers/)


### 🎤 Interview
- What can be tested by acceptance tests. Elaborate
- What is the biggest disadvantage of acceptance tests
- Elaborate about 3 functions provided by `ember-test-helpers`

### 📝 Katas
- Show the acceeptance tests in your project
- Provide an acceptance test for a list of items:
  - Check initial items count
  - Provide a remove item scenario (count should decreased with each delete)
  - Provide a test for adding a new item
---
