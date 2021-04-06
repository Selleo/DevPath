+++
title = "JavaScript/Ember - Basics"
weight = 1
+++

{{%bubble %}}

## Framework & Language Basics

**Points:** 2 

**Description:** You can use basic features of the framework, that allows you to deliver the most common features.

**Person who successfully completed requirement for given block can:** 

- Can deliver simple, typical functionalities with little to no additional help
- When asking for help, can present the problem and already explored solutions clearly and in detail
- Can debug simple problems within the application (excluding framework) using the right tooling
- Can present the strenghts and use cases for the framework
- Is capable of leveraging most commonly used standard library capabilities
- Has working knowledge of most commonly used packages/libraries

**Prerequisites:** [Styling basics](/web_development/skills/styling/01_junior_i/)

{{% /bubble%}}

After finishing this course you should be able to setup an Ember application, create components, provide simple routing between pages and write your first tests

## Areas

**Ember Basic Concepts I**
- Application structure
- Models
- Router
- Route

**Ember CLI**
- Start a new application
- Addons
- Commands
- Application file structure
- Build

**Templates & Helpers**
- Can explain diff between helper and component
- Know how to write helpers
- Know and use helpers
- Conditionals: if, unless
- Lists: each, each-in, else
- Forms: input, textarea

**Tooling**
- Know how to run / Build ember project (also in production mode)
- Know how to run tests in development (console / browser ) and in CI (Circle CI)
- Know how to use ember inspector
- Know how to debug application
- Know all the packages in package.json
- Know the app structure
- using ember-cli, generators, blueprints

**Routing I**
 - can explain how the routing works, how router translate path to route, and what is the relation with controller and the template
 - use application, index, wildcard route
 - use nested route and use dynamic segments (router, route)

**Components I**
- Communication with the outside world: Data Down | Actions Up | Services
- handling actions for component
- tracked property

**Ember Data I**
- What is the role of models in the application
- Understand of Ember data basic
- Defining and working with models
- Relationships

**Unit Tests**
- can explain when write test for what
- can explain how tests are executed (in: dev / browser / ci)
- skill to write unit tests (utils | helpers)

---

## 📦 Ember / Core Concepts

Knows the core concepts and anatomy of every Ember.js application

### 🎓 Learn

- 📗 [Ember.js](https://emberjs.com/)
- 📗 [Ember guides](https://guides.emberjs.com/)
- 📗 [Ember tutorial](https://guides.emberjs.com/release/tutorial/part-1/)
- 📗 [Anatomy of Ember App](https://guides.emberjs.com/release/getting-started/anatomy-of-an-ember-app/)
- 📗 [Models](https://guides.emberjs.com/release/getting-started/anatomy-of-an-ember-app/#toc_models)
- 📗 [Router and routes](https://guides.emberjs.com/release/getting-started/anatomy-of-an-ember-app/#toc_router-and-route-handlers)

### 🎤 Interview

- Explain basic flow of Ember application
- What is the role of router in Ember application?
- What can be achieved by using routes handlers?
- What is the role of models in Ember?
- What data management libraries can you use instead of the default one?

### 📝 Katas
- Present a finished tutorial application
---

## 📦 Ember / Ember CLI

Optimize your work with Ember CLI in your toolbelt

### 🎓 Learn

- 📗 [Ember CLI](https://cli.emberjs.com/release/)
- 📗 [Basic use](https://cli.emberjs.com/release/basic-use/)
- 📗 [Ember observer](https://emberobserver.com/)
- 📗 [Addons](https://cli.emberjs.com/release/#whatareaddons)
- 📗 [Application file structure](https://cli.emberjs.com/release/basic-use/folder-layout/)

### 🎤 Interview

- How can we install Ember CLI and create a new project?
- What are addons to Ember application?
- Where can you look for interesting package and how to install it?
- How can you generate a model/component/test by using Ember CLI?
- What is the role of file/directory e.g `/template-lintrc.js` or `/vendor`

---

## 📦 Ember / Templates and Helpers

Understand role of templates and helpers in Ember application

### 🎓 Learn

- 📗 [Templates introduction](https://guides.emberjs.com/release/components/)
- 📗 [Lists of elements](https://guides.emberjs.com/release/components/looping-through-lists/)
- 📗 [Conditionals in templates](https://guides.emberjs.com/release/components/conditional-content/)
- 📗 [Helpers](https://guides.emberjs.com/release/components/helper-functions/)
- 📗 [HTML attributes](https://guides.emberjs.com/release/components/component-arguments-and-html-attributes/)

### 🎤 Interview

- How can you display component's own properties, properties passed from the component above
- What should you use to display a label depending on given value?
- Explain a difference between `each` and `each-in`
- Are we able to use multiple helpers together?
- How would you handle an empty state of array in the template?
- What's the role of `...attributes`

### 📝 Katas
- Create a helper which will take a raw date object and return formatted date. E.g `11-03-2020`
- Create a component to display an array of names. Handle a case when the array is empty and display a dedicated message

---

## 📦 Ember / Tooling I

Get know basic of tooling in Ember.js

### 🎓 Learn

- 📗 [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/)
- 📗 [Testing introduction](https://guides.emberjs.com/release/testing/)
- 📗 [JavaScript debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- 📗 [Heroku deployment](https://www.heroku.com/emberjs)
- 📗 [Netlify deployment](https://devjournal.balinterdi.com/how-to-deploy-an-ember-app-to-netlify/)


### 🎤 Interview

- How will find a certain component using Ember Inspector?
- Are you able to modify records via Ember Inspector?
- How can you debugger a component's code?
- Can we use debugger in the templates? Explain how to do it.
- What are the differences between `ember test` and `ember test --server`. Which one is better for development purposes?
- What will happen after running `ember build`

### 📝 Katas
- Show examples of using Ember inspector
- Deploy your application


## 📦 Ember / Routing I

Get know basic of routing in Ember.js

### 🎓 Learn
- 📗 [Introduction](https://guides.emberjs.com/release/routing/)
- 📗 [Routes definitions](https://guides.emberjs.com/release/routing/defining-your-routes/)
- 📗 [LinkTo](https://guides.emberjs.com/release/routing/linking-between-routes/)
- 📗 [Redirecting](https://guides.emberjs.com/release/routing/redirection/)

### 🎤 Interview
- What's the job of route handler?
- What's the role of `LinkTo` component
- How can we define dynamic route and handle it in route handler
- What's the role of `model` in route
- What's the role of `outlet` used in route template
- How will you handle missing URLs

### 📝 Katas
- Show routes in your application

## 📦 Ember / Components I

Get know basic of components in Ember.js

### 🎓 Learn
- 📗 [Introduction to components](https://guides.emberjs.com/release/components/component-state-and-actions/)
- 📗 [Autotracking](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/)
- 📗 [Redirecting](https://guides.emberjs.com/release/routing/redirection/)

### 🎤 Interview
- Explain a role of `@tracked` properties
- How can you define a computed properties (e.g getter for fullName)
- How can you define a action on component and execute it from template
- What's the role of `constructor` method for component
- How can you pass a value to component action

## 📦 Ember / Ember Data I

Get know basic of components in Ember.js

### 🎓 Learn
- 📗 [Ember data](https://guides.emberjs.com/release/models/)
- 📗 [Defining models](https://guides.emberjs.com/release/models/defining-models/)
- 📗 [Finding records](https://guides.emberjs.com/release/models/finding-records/)
- 📗 [Operetions on records](https://guides.emberjs.com/release/models/creating-updating-and-deleting-records/)
- 📗 [Relationships](https://guides.emberjs.com/release/models/relationships/)

### 🎤 Interview
- How can you define a properties for model and relationships
- What are the types of available relationships
- How can you get a records in the component
- Explain a basic operation that can be done on model instance
- What is the difference between `query` / `queryRecord` and `findRecord` / `findAll` 

## 📦 Ember / Testing I

Get know basic of unit testing in Ember.js

### 🎓 Learn
- 📗 [Introduction to unit tests](https://guides.emberjs.com/release/testing/test-types/#toc_unit-tests)
- 📗 [Testing helpers](https://guides.emberjs.com/release/testing/testing-helpers/)
- 📗 [Testing models](https://guides.emberjs.com/release/testing/testing-models/)

### 🎤 Interview
- What is the role of unit tests in your application
- How can you debug your tests?
- Explain a structure of a test file
- What's the role of `setupTest` function

### 📝 Katas
- Provide a test for helper written in `Templates` section
- Provide a test for models, including an example of relationship testing
