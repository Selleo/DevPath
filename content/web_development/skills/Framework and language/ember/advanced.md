+++
title = "JavaScript/Ember - Advanced"
weight = 2
+++

{{%bubble %}}

## Framework & Language Advanced

**Points:** 2 

**Description:** You can apply the best practices across the framework while delivering solution.

**Person who successfully completed requirement for given block can:** 

- Comprehend, design and deliver a full range of functionalities with no need for consultation (yet intuitively knows, when to ask for second opinion)
- Demonstrate debuggins skills for a full range of problems within application, also by investigating the framework code
- Identify all framework capabilities and best-practices
- Name, explain, choose and apply a wide range of software desing patterns to solve particular problems 
- Demonstrate strong skills in TDD/BDD

**Prerequisites:** 
- [Styling advanced 1](/web_development/skills/styling/02_junior_ii/)
- [Styling advanced 2](/web_development/skills/styling/03_independent_i/)

{{% /bubble%}}

After finishing this course you should be comfortable with services, creating an authentication for your application, handling an advanced routing, setting an adapter or using modifiers.

You will learn about mocking data for testing purposes too. You will write your the first integration tests

## Areas
**Services**
- Can explain what is the service, and what is special about it, enumarate use cases
- Know how to create service and how to consume it (remember it is lazy loaded)

**Authentication**
- Know how to implement basic authentication
- Know how to manage session, how to get data from the session
- Define a route access based on session state

**Ember data II**
- Configure/customize ember data adapter (for the development and for the production)
- Specify a headers for each request outcoming your application
- Know how to deserialize properties coming from the server
- Know how to serialize properties to pass server validation
- Can create a custom type for model property

**Routing II**
- Use loading, error route substate
- Use queryParams via Ember Parachute
- Use beforeModel, model, afterModel, redirect hooks
- Use route api: modelFor, controllerFor, paramsFor, transitionTo, redirect

**Modifiers**
- Know how to use modifiers
- Know differences between modifiers and helpers
- Invoke functions based on lifecycle hooks

**Ember Mirage**
- Know how to setup basic routes structure
- Know basics of mocking endpoints
- How to use factories with using of faker.js
- Know when to use mirage dedicated models
- Use ember mirage features in the tests

**Integration Tests**
- Know what should be tested
- Use ember mirage
- Know ember test helpers
- Know ember test selectors
- Know qunit dom
- Know what is the use case of `pauseTest` method
- Know how to stub in tests e.g service
---

## 📦 Ember / Services

Knows a role of services in the application.

### 🎓 Learn

- 📗 [Overview](https://guides.emberjs.com/release/services/)
- 📗 [How to access a service](https://guides.emberjs.com/release/services/#toc_accessing-services)
- 📗 [How to access a service](https://guides.emberjs.com/release/services/#toc_accessing-services)

### 🎤 Interview

- What design pattern is used to service implementation?
- Is service state shared between routes?
- What will happened with service after refreshing an app?
- How will you access your service in component?


### 📝 Katas
Create a service which will store your wishlist. It should implement such functions like add / remove.
You should be able to save your wishlist to localStorage after clicking a button and cleaning the localStorage after clicking other button.
---
## 📦 Ember / Authentication

Basics of the authentication in your application

### 🎓 Learn

- 📗 [Ember simple auth *recommended](https://github.com/simplabs/ember-simple-auth)
- 📗 [Torii](https://emberobserver.com/addons/torii)
- 📗 [Other authenticators](https://emberobserver.com/categories/authentication)

### 🎤 Interview

- How can you access session data?
- How will you check if a user is logged?
- How will you prevent unlogged user from accessing protected route
- Can you have a different authenticators in your application? *ember-simple-auth case

### 📝 Katas
- Show a authentication in your project *Recommended
- Implement a basic login / logut functionality to your application

---

## 📦 Ember / Ember Data II

Understand advanced topics of Ember Data.

### 🎓 Learn

- 📗 [Handling metadata](https://guides.emberjs.com/release/models/handling-metadata/)
- 📗 [Adapters](https://guides.emberjs.com/release/models/customizing-adapters/)
- 📗 [Serializers](https://guides.emberjs.com/release/models/customizing-serializers/)
- 📗 [Transforms](https://guides.emberjs.com/release/models/customizing-serializers/#toc_creating-custom-transformations)

### 🎤 Interview

- How can you modify headers for each request
- How can you setup an adapter to fetch data from such server: `localhost:4000/api/v1/partner/[..]`
- How would you tell adapter to call endpoint `my_cars` instead of `my-cars`
- Where and how will use a custom id e.g `_id` served by backend
- How will you omit a certain property from being send back to the server?
- Give an example of custom type

### 📝 Katas
- Create a transform called `object` to convert object's properties to be camelCase on income to Ember Data and snake_case while send to the backend.
```js
// server response
property: {
  first_name: 'zyx',
  age: 1,
  money_in_bank: 11000
}
```
---

## 📦 Ember / Routing II

Advance topics on routing in Ember

### 🎓 Learn

- 📗 [Loading & Error screen](https://guides.emberjs.com/release/routing/loading-and-error-substates/)
- 📗 [Query Params](https://guides.emberjs.com/release/routing/query-params/)
- 📗 [Ember Parachute](https://github.com/offirgolan/ember-parachute)
- 📗 [Redirects](https://guides.emberjs.com/release/routing/redirection/)
- 📗 [Hooks & API](https://guides.emberjs.com/release/routing/specifying-a-routes-model/)


### 🎤 Interview
- How will you create a generic loading screen used in the whole application?
- How can you create a loading / error screen for a certain route
- What is the role of query params? How can you add a query param?
- What can be handled in `beforeModel`, `model` and `afterModel` hooks
- How will you check a user permissions before fetching certain route? How will you redirect a user while his permissions are not enough?
- Elaborate about `controllerFor`, `paramsFor` and `modelFor` methods

---

## 📦 Ember / Modifiers

Understand an idea of modifiers, how to use them

### 🎓 Learn
- 📗 [Overview](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html)
- 📗 [on modifier](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_event-handlers)
- 📗 [did-insert modifier](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_calling-methods-on-first-render)

### 🎤 Interview
- What is the usage of modifiers?
- What is the difference between modifier and helper
- Name three modifiers

---

## 📦 Ember / Ember Mirage

Basic endpoints mockups and factories made by Ember Mirage

### 🎓 Learn
- 📗 [Homepage](https://www.ember-cli-mirage.com/)
- 📗 [Overview](https://www.ember-cli-mirage.com/docs/getting-started/overview)
- 📗 [Faker.js](https://github.com/marak/Faker.js/)
- 📗 [Mirage in unit/integration tests](https://www.ember-cli-mirage.com/docs/testing/integration-and-unit-tests)

### 🎤 Interview
- How will you define a host and namespace to being mocked up by Mirage? E.g `localhost:4000/api/v1/partner/[..]`
- How will you set a delay on each response
- How will you handle query params?
- What is the role of factories and how will you define one?
- How can you use Mirage in your tests? Do we need a setup it first?

### 📝 Katas
- Show usage of Ember Mirage in your project
---


## 📦 Ember / Ember Mirage

How to implement a integration test in Ember.js

### 🎓 Learn
- 📗 [Overview](https://guides.emberjs.com/release/testing/testing-components/)
- 📗 [Stubbing services](https://guides.emberjs.com/release/testing/testing-components/#toc_stubbing-services)
- 📗 [Ember Test Helpers](https://github.com/emberjs/ember-test-helpers/)
- 📗 [Ember Test Selectors](https://github.com/simplabs/ember-test-selectors)
- 📗 [Qunit Dom](https://github.com/simplabs/qunit-dom)

### 🎤 Interview
- What is the difference between unit and integration tests
- How can you override a component action in tests?
- How will you stub a store service to not make a call while using `.findAll` instead of it should return predefined array with objects
- How will you create a array of records in tests and pass it to component?
- Name with explaination a few functions provided by Ember Test Helpers
- Why should you use Ember Test Selector in your application? What are benefits of using it?
- Can you use Ember Test Selectors in a combination with Qunit Dom?

### 📝 Katas
- Show a integration tests in your project
- Stub a service created in `Services` section, it should save your wishlist in an array defined in a test. On delete the item should be removed from the array. In your test scenario you should verify changes of that array after saving the items and then after removing
---
