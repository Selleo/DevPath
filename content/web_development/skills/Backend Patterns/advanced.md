+++ aliases = ["backend", "patterns"]
title = "Back-End Patterns - Advanced"
weight = 2 +++

{{%bubble %}}

## Advanced Back-End Patterns

**Points:** 1

**Description:** You can apply the best practices across the framework while delivering solution.

**Person who successfully completed requirement for given block can:**

- Comprehend, design and deliver a full range of functionalities with no need for consultation (yet intuitively knows, when to ask for second opinion)
- Demonstrate debugging skills for a full range of problems within application, also by investigating the framework code
- Identify all framework capabilities and best-practices
- Name, explain, choose and apply a wide range of software design patterns to solve particular problems
- Demonstrate strong skills in TDD/BDD

{{% /bubble%}}

## 📦 Ruby On Rails/ Framework Advanced Topics

In this section we will build more advanced features in our Rails application and learn how to answer more demanding technical interview questions.

### 🎓 Learn

- [Clients and Wrappers](https://medium.com/selleo/essential-rubyonrails-patterns-clients-and-wrappers-c19320bcda0)
- [Value Object](https://revs.runtime-revolution.com/value-objects-in-ruby-on-rails-9df64bc8db34)
- [Thoughtbot - Null Object](https://thoughtbot.com/blog/handling-associations-on-null-objects)
- [Pattern Matching](https://womanonrails.com/ruby-pattern-matching)
- [Refactoring - code smells](https://refactoring.guru/pl/refactoring/smells)
- [Design Patterns - Creational Patterns](https://refactoring.guru/design-patterns/creational-patterns)
- [Design Patterns - Structural Patterns](https://refactoring.guru/design-patterns/structural-patterns)
- [Design Patterns - Behavioral Patterns](https://refactoring.guru/design-patterns/behavioral-patterns)

### 🎤 Interview

**IMPORTANT TOPICS FOR DISCUSSION:**

- "Composition over Inheritance" - explain what is it and what can happen when you neglect this principle?
- "Asynchronous processing" - what is it? What tools can you use to implement it? What are pros and cons of introducing asynchronous processing in your application? When to use it?
- "Caching" - what is it? Compare page/action/fragment/partial/low level caching? What are pros and cons of using caching in your application? When to use it?
- "Microservices Oriented Architecture" - Compare it to monolith application. When to use? How communication between services looks like? What are the potential problems? What are the things that you should pay special attention to during design and implementation?
- "JSON API vs GraphQL API vs REST API" - what are the pros and cons of using them? When will you suggest one over another?

**OTHER QUESTIONS:**

- Compare Client and Wrapper.
- What is an Iterator? when should we use it, what problems does it solve for us?
- What is a Value Object? when should we use it, what problems does it solve for us?
- What is a Null Object, when should we use it, what problems does it solve for us?
- What is Sanitization? When can it be useful?
- What is pattern matching? When can it be useful?
- What does it mean that method is Deterministic?
- What is the difference between Continuous Delivery/Integration/Deployment?
- What is Dependency Injection?
- List and explain creational patterns. Which of them have you used?
- List and explain structural patterns. Which of them have you used?
- List and explain behavioral patterns. Which of them have you used?
- List code smells you know.
- What is Pub/Sub? - What problems do they solve? Provide meaningful examples when we should care about it and explain why?
- What is a Message Broker - What problems do they solve? Provide meaningful examples when we should care about it and explain why?
- What is Idempotency - Provide meaningful examples when we should care about it and explain why?
- What is Eventual Consistency? - Provide meaningful examples when we should care about it and explain why?
- What is Command/Query Responsibility Segregation? What advantages does it give? Provide meaningful examples of when would you decide to use it?
- What is Domain-Driven Design? What advantages does it give? For what kind of projects it can/should be used?

### 📝 Katas

- In all below steps use Test Driven Development.
- Please DO NOT use any gems like active admin.
- Please DO NOT waste your time on any styling :)
- Important: use correct patterns when applicable!

**APPLICATION DESCRIPTION**

- implement JSON API for resource that has has_many association
- implement simple GraphQL API for resource that has has_many association with simple mutations and queries
- implement 4 different types of caching
- use Polymorphism in your application
- use Single-Table Inheritance
- implement sidekiq in your application
- use third party API with the usage of Client and Wrapper
- use webhooks
- use websockets
- implement Iterator
- implement Value Object
- implement Null Object
