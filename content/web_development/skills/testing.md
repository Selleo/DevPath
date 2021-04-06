+++
title = "Testing Expertise"
+++

{{%bubble %}}

## Testing Expertise

**Points:** 2

**Description:** You can use testing automation tool in critical area of the system, to increase the overall stability of the solution in terms of business requirements.

**Person who successfully completed requirement for given block can:**

- Identify the critical areas that should be automatically tested to keep the business processes continuity
- propose a proper testing strategy for the project
- write various types of automated tests
- automate the testing proces via CI tools

{{% /bubble%}}

## Areas

**Skills & practices**

- Test driven development (TDD)
- Test doubles
- API Integration (patterns, recommendations and testing)

**Types of tests**

- Unit
- Integration
- E2E
- System testing
- A/B
- Load testing

**Tooling**

- Test coverage
- Continuous Integration/Deployment/Delivery

---

## 📦 Test driven development (TDD)

### 🎓 Learn

- "How to make the thing right" (TDD) vs "How to make the right thing" (BDD)
- Always see your test fail the right way
  - red/green/refactor loop
  - small development iterations
  - break code to ensure that "natural-greens" test the correct thing (limit false-positives)
- for every context prefer introducing counter-context
- benefits/costs of TDD
  - when not to TDD (i.e. one-off jobs, scripts, datafixes, migrations - code not used by main application)
  - 📗 [Tests-induced design damage](https://dhh.dk/2014/test-induced-design-damage.html) (when focusing on code testability results in overcomplicated solutions)
  - TDD often guides good architecture and helps ensuring long-term stability and extensibility (by keeping tech debt under control)
  - we add only what we need - not too much and not too little
- basic types of tests we use
  - unit tests
  - integration tests
  - feature tests
  - end-to-end tests
  - smoke tests
  - performance/load/stress/volume(...) tests (i.e. how system behave under some specific/maximum/peak load, lots of data, query count, code benchmarking)
- inside-out (pre-planned implementation architecture)
  - great for problems that need algorithmical solution where specification is unlikely to change much
  - results in highly optimised solution and tests
  - also results in soldified solution, that may be difficult to change or refactor for reuse
  - requires skills in planning implementation of solutions for complex problems
- outside-in (implementation architecture planned on-the-fly)
  - great for "simple" problems (process oriented) where specification may be likely to change
  - results in not overcomplicated, elastic-for-refactoring solution
  - does not require sophisticated skills in planning implementation architecture
  - applied to problem that requires algorithmical solution can result in ugly, complex, hard to understand and inefficient code
- going out of sync between tests and code during refactoring (or even implementation) phase vs keeping all units fully tested

## 📦 Test doubles

### 🎓 Learn

- **Stubs**: these are used to replace a method call with a predefined return value. It’s the simplest use case;
- **Mocks**: responsible for the “real” magic of BDD, these are like stubs that can also record the interactions and messages received. Then, after the test runs, they can check whether the specified messages were received (including the number of times a message was received and the arguments passed in);
- **Spies**: these are like mocks, the difference here is that with mocks you write a expectation, then invoke the code that should (or should not) trigger it. With spies you keep the “normal” testing flow of invoking the code and then checking for the interactions (like the traditional assertions);
- **Fakes**: simpler versions of complex objects, generally “hand crafted” (not using a special tool or framework) and used when the real code would cause the tests to be too slow, cumbersome or unreliable.

### 📝 Katas

- Show practical usage of all kind of test doubles

## 📦 API Integration (patterns, recommendations and testing)

### 🎓 Learn

- Research the API
  - what API allows (capabilities)
  - look for patterns in API structure
  - does it adhere to any standard
  - completeness and quality of documentation
  - demo/sandbox accounts
  - limits (i.e. throttling)
  - how errors are returned
  - how pagination is handled
- Look for existing clients provided by vendor or community before rolling out your own
  - check how often it is updated/maintained so you are safe if/when API changes
- `Client` and `Facade` (`Wrapper`) patterns are useful in the context of integrating APIs (refer to their descriptions in this document)
- Testing API integrations
  - Mocking clients
    - Especially when we have implemented client library ourselves
  - mocking request
    - Webmock
      - especially for well documented APIs (copy&paste straight from documentation)
      - ...and testing API Client classes
    - VCR (recording responses)
      - for large responses (that would render tests unreadable)
      - for responses consisting of lots of irrelevant data (i.e. non-documented APIs, scraping)
      - smoke tests (especially when coupled with "expiring cassettes")
      - sequenced calls
  - using real connections to real services
    - useful in context of smoke specs
    - sandboxes can also be leveraged if available (need to be aware, that some sandboxes can go out-of-sync with their parent applications)
  - using real connections to fake services
    - i.e. locally set up servers, sandboxes or services mimicking original service behaviour
    - especially useful for frontend development

## 📦 Testing / Unit

### 🎓 Learn

- 📗 [Jest](https://jestjs.io/docs/en/getting-started.html)

### 🎤 Interview

- Explain role of unit tests
- What you should test in unit tests?

### 📝 Katas

- Show example usage of your unit test and describe it

## 📦 Integration

## 🎓 Learn

- 📗 [Integration tests in React](https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894)
- 📗 [Integration tests in Ember](https://github.com/PoslinskiNet/ember-testing-guide)

### 🎤 Interview

- Explain the role of integration tests

## 📝 Katas

- Write integration test and then matching component in the framework of your choice

## 📦 E2E

### 🎓 Learn

- 📗 [Overview article](https://www.lambdatest.com/blog/all-you-need-to-know-about-end-to-end-testing/)
- 📙 [Cypress](https://www.cypress.io/)
- 📙 [Ember Testing guide](https://github.com/PoslinskiNet/ember-testing-guide) (acceptance section)

### 🎤 Interview

- What should we test in E2E?
- What should we avoid in E2E tests?
- What is conditional testing and when is it helpful?
- What are pros and cons of using mocked data over real data, when would you use it and why?
- How to work with requests (waiting/reading data/overwriting)?
- How to debug test runs?
- How would you prepare your app to run E2E tests on it?

### 📝 Katas

- Present your sample acceptance test and elaborate about it (it could be a test for the excercise from Local storage section)

## 📦 Tooling / Test coverage

- Does not reflect quality / quantity of test
- Does reflect how much code was executed during test execution
- TDD results in coverage is close to 100%
- SimpleCov as a tool of choice for Rails
- Test that may not be tested by choice (and may affect coverage)
  - Migrations
  - Data fixes
  - CLI Tools (rake tasks)
  - `/lib` that is outside of main app context - i.e. console tools / extensions
- enforcing certain level, ensuring “no drop”

### Rails

- 📗 https://thoughtbot.com/upcase/videos/value-objects
- 📗 https://github.com/thoughtbot-upcase-exercises/extract-value-object

## 📦 Tooling / Continuous Integration/Deployment/Delivery

### 🎓 Learn

- Continuous integration
  - continuously integration with main branch
- Continuous delivery
  - deployment is manual
- Continuous deployment
  - continuously deploying application
- 📗 [Comparison](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- 📗 https://www.freecodecamp.org/news/the-real-difference-between-ci-and-cd/

### Tools

- TravisCI
- CircleCI

- Steps (examples)
  - Linting
  - Running tests
  - Smoke tests
  - Static code analysis
    - Security
    - Libraries are up to date
