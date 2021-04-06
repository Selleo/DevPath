+++
aliases = ["backend", "ror", "ruby", "rails", "junior"]
title = "Ruby/Ruby On Rails - Basics"
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

**Prerequisites:** [Persistence basics](/web_development/skills/persistence/basics/)

{{% /bubble%}}

## Areas

### Ruby:

- Overview
- Language basics

### Ruby On Rails:

- Overview
- Framework Basics
- Testing Basics

---

## 📦 Ruby / Overview

Know what is a Ruby language, what are the pros and cons. Unique selling points of the language.

### 🎓 Learn

- [ruby-lang.org](https://www.ruby-lang.org/en/about/)

### 🎤 Interview

- What is Ruby?
- Why do you like Ruby? / What are the best features Ruby provides for you?
- Why is Ruby still so popular?

---

## 📦 Ruby / Language Basics

Ruby language fundamentals. The Goal is to learn how to use Ruby in an efficient way when solving basic algorithmic problems. We also try to teach you answers to common Ruby questions that you can encounter on technical interviews with the client.

### 🎓 Learn

- [Ruby Monk - primer](https://rubymonk.com/learning/books/1-ruby-primer)
- [Ruby Monk - primer ascent](https://rubymonk.com/learning/books/4-ruby-primer-ascent)
- [Ruby for beginners](http://ruby-for-beginners.rubymonstas.org/index.html)
- [Ruby Guides - ruby tutorial](https://www.rubyguides.com/ruby-tutorial/)

### 🎤 Interview

- List and explain Ruby data types.
- What is the difference between object and class?
- When would you use a protected method instead of a private one?
- What is the difference between Hash and Array?
- What are the most useful Hash and Array methods?
- What does it mean that everything is an object in Ruby?
- When should you use symbols and when strings?
- What is and what can lambda/Proc be used for?
- Explain what blocks are for and how do you implement methods that leverage them?
- What is variable scope? Explain global/class/instance/local variable scopes.
- How many variables are used in Ruby and what are they?
- Can you explain to me how to handle exceptions in Ruby?
- How can you benchmark ruby code?
- What is the difference between calling super and calling super()?
- How can you call a private method outside a Ruby class using its object?
- What is the difference between extend and include in Ruby?
- What is yield statement?
- List at least 3 ruby iterators.
- How can you clone an object and why can it be helpful?

### 📝 Katas

- Solve 10 algorithmic coding challenges (HackerRank/Exercism/AdventOfCode) with Ruby

---

## 📦 Ruby On Rails / Overview

The goal of this section is to teach you what Ruby on Rails is and give you some ideas for conversation with potential client about Rails as an ecosystem.

### 🎓 Learn

- [Why use Ruby on Rails?](https://www.monterail.com/blog/why-ruby-on-rails-development-2020)

### 🎤 Interview

- What is the difference between "Ruby" and "Ruby on Rails"?
- What do you like/dislike in Rails?
- What are the RoR features you like the most?
- What types of applications is RoR good for?
- What types of applications is RoR bad for?
- What gems do you usually use in your applications?

---

## 📦 Ruby On Rails / Framework Basics

In this section we will build a Rails application with most common features and learn how to answer some of the common Rails/OOP interview questions.

### 🎓 Learn

- [Rails Guides](https://guides.rubyonrails.org/) (read parts that you have to use to create application described in katas below)
- [RubyOnRails doctrine](https://rubyonrails.org/doctrine/)
- [Thoughtbot - SOLID](https://thoughtbot.com/blog/back-to-basics-solid) AND you can watch movies as well:
  - [Thoughtbot - SRP](https://thoughtbot.com/upcase/videos/single-responsibility-principle)
  - [Thoughtbot - OCP](https://thoughtbot.com/upcase/videos/open-closed-principle)
  - [Thoughtbot - LSP](https://thoughtbot.com/upcase/videos/liskov-substitution-principle)
  - [Thoughtbot - ISP](https://thoughtbot.com/upcase/videos/interface-segregation-principle) (OPTIONAL)
  - [Thoughtbot - DIP](https://thoughtbot.com/upcase/videos/dependency-inversion-principle) (OPTIONAL)
- [Thoughtbot - LoD](https://thoughtbot.com/upcase/videos/law-of-demeter)
- [Thoughtbot - Tell don't ask](https://thoughtbot.com/blog/tell-dont-ask)
- [Tools for code optimization](https://infinum.com/the-capsized-eight/top-8-tools-for-ruby-on-rails-code-optimization-and-cleanup)
- [Thoughtbot - Decorators](https://thoughtbot.com/blog/decorators-compared-to-strategies-composites-and)
- [Single Source of Truth](https://edunceputans.medium.com/single-source-of-truth-and-problems-with-implication-in-an-organisation-588883492133)
- [Service Object](https://medium.com/selleo/essential-rubyonrails-patterns-part-1-service-objects-1af9f9573ca1)
- [Query Object](https://medium.com/selleo/essential-rubyonrails-patterns-part-2-query-objects-4b253f4f4539)
- [Form Object](https://medium.com/selleo/essential-rubyonrails-patterns-form-objects-b199aada6ec9)
- [Rails naming convention](https://medium.com/selleo/a-subjective-guide-to-naming-stuff-in-ruby-on-rails-classes-b44928b6c49a)
- [Eliminating N+1 queries](https://semaphoreci.com/blog/2017/08/09/faster-rails-eliminating-n-plus-one-queries.html)

### 🎤 Interview

**IMPORTANT TOPICS FOR DISCUSSION:**

- "Convention over Configuration" - convince me that it is a good thing in Rails :)
- "Single Source of Truth" - explain what is it and what can happen when you neglect this practice?
- "Single Responsibility Principle" - explain this principle in simple words. Describe how you evaluate given class to decide if or if not this class follows the principle. Explain consequences of not adhering to this principle. Explain if and what are the situations in which you would violate this rule. Provide examples that would fit our context.
- "Open–closed Principle" - explain what is it and what can happen when you neglect this principal?
- "Liskov substitution principle" - explain what is it and what can happen when you neglect this principle?
- "Law of Demeter" - explain what is it and what can happen when you neglect this principle?
- "REST API" - explain how REST API works and what are good practices when creating one for your app?

**OTHER QUESTIONS:**

- What is the naming convention in Rails?
- Compare Active Record Pattern with Rails Active Record
- What problems does Rails Migration help to mitigate?
- What is the role of a Rails Model?
- What is the role of a Rails Controller?
- What is the role of a Rails View?
- What is the role of a Rails Routes?
- What are callbacks in Ruby on Rails?
- What are validations in Ruby on Rails?
- What types of associations do you know? Can you compare them?
- What is the difference between redirect and render in Ruby on Rails?
- What is the difference between session and cookie? How can you access them in Rails?
- Can you explain to me the Request / Response lifecycle in Rails?
- Explain difference between authorization and authentication
- List SOLID design principles and explain each of them in one sentence
- Explain Cross-Origin Resource Sharing (CORS) and how to set it up correctly in a Rails application.
- Explain what is Cross-Site Request Forgery (CSRF) and how Rails is protected against it?
- What is a State Machine and what problem can it solve for you?
- Can you explain what is DRY (don't repeat yourself)? When will you use DRY and when is better to use WET (write everything twice)?
- What is the difference between I18n and L10n? How can you implement those concepts in Rails application?
- What is a refactoring? What types of refactoring do you know?
- How to eliminate N+1 queries in Rails?
- What gem will you choose for authentication in your application and what other alternatives do you know? please compare them with your choice.
- What gem will you choose for authorization in your application and what other alternatives do you know? please compare them with your choice.
- What is pagination and why should we use it? what gems are you familiar with that handle it for us in a rails application? What types of pagination do you know?
- What gems can you use for static code analysis?
- What template languages do you know? Which is your weapon of choice in Rails?
- What is a Form Object, when should we use it, what problems does it solve for us?
- What is a Query Object, when should we use it, what problems does it solve for us?
- What is a Service Object, when should we use it, what problems does it solve for us?
- What is a Decorator, when should we use it, what problems does it solve for us?
- What is a Presenter, when should we use it, what problems does it solve for us?
- What is a Policy, when should we use it, what problems does it solve for us?

### 📝 Katas

- In all below steps use Test Driven Development (where it makes sense, which is almost everywhere).
- Please DO NOT use any gems like active admin.
- Please DO NOT waste your time on any styling :)
- Important: use correct patterns when applicable!

**USEFUL GEMS**

- [devise](https://github.com/heartcombo/devise)
- [pundit](https://github.com/varvet/pundit)
- [sello pattern](https://github.com/Selleo/pattern)
- [simple form](https://github.com/heartcombo/simple_form)
- [kaminari](https://github.com/kaminari/kaminari)
- [ranasack](https://github.com/activerecord-hackery/ransack)
- [aasm](https://github.com/aasm/aasm)
- [letter opener](https://github.com/ryanb/letter_opener)
- [rubocop](https://github.com/rubocop-hq/rubocop)
- [simplecov](https://github.com/simplecov-ruby/simplecov)
- [rubycritic](https://github.com/whitesmith/rubycritic)
- [rails best practices](https://github.com/flyerhzm/rails_best_practices)
- [brakeman](https://github.com/presidentbeef/brakeman)
- [bullet](https://github.com/flyerhzm/bullet)
- [rspec](https://github.com/rspec/rspec-rails)
- [facoty bot](https://github.com/thoughtbot/factory_bot)
- [faker](https://github.com/faker-ruby/faker)

**APPLICATION DESCRIPTION**

- create a rails application with devise (reset password + sign_in, NO sign up)
- admin user should be created by seeds
- admin can create users in admin panel (namespace)
- when admin creates a user then email and password (autogenerated) are sent by email
- admin can add categories (just a name, uid, and description)
- admin can add products (name, uuid [unique!], image, description, at least one category, number of products in stock)
- admin can edit categories/products
- admin can remove categories (if no products are connected)
- admin can archive product (set archived_at field to time when it happened, archived products cannot be purchased after this time)
- admin can see paginated list of categories (with filters and search)
- admin can see paginated list of products (with filters and search)
- admin can see paginated list of purchases (with filters and search)
- admin can export filtered purchases to XLS
- admin can import products with CSV file
- user can log in by email/password
- user can reset password
- user can edit email, password, first_name, last_name
- user cannot access admin panel namespace
- user can buy a product (number of products in stock is decreased)
- user can see history of his purchases
- implement REST api for products (all actions)
- implement authorization on top of this application, use it in proper places
- implement a view with statistics that is available for admin
- implement a state machine for purchases
- implement Null Object
- implement Decorator
- use exception handling in controller and in one of your service objects
- set up 3 static code analysis gems

---

## 📦 Ruby On Rails / Testing Basics

In this section we will understand TDD and learn when to use rspec and capybara.

### 🎓 Learn

- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- [readable rspec part 1](https://medium.com/selleo/an-opinionated-guide-to-readable-rspec-part-1-of-2-fe1dce79a478)
- [readable rspec part 1](https://medium.com/selleo/an-opinionated-guide-to-readable-rspec-part-2-of-2-2cc64b92aa14)
- [read only Stubs/Mocks/Spies/Fakes part](https://www.sitepoint.com/solid-ruby-dependency-inversion-principle/)
- [testing antipatterns part 1](https://medium.com/selleo/rubyonrails-testing-antipatterns-part-1-d3e2a201502c)
- [testing antipatterns part 2](https://medium.com/selleo/rubyonrails-testing-antipatterns-part-2-2-ab98783dbfb3)
- [rspec docs](https://relishapp.com/rspec/rspec-rails/docs/directory-structure)
- [rspec](https://github.com/rspec/rspec-rails)
- [capybara](https://github.com/teamcapybara/capybara)
- [factory bot](https://github.com/thoughtbot/factory_bot)
- [faker](https://github.com/faker-ruby/faker)

### 🎤 Interview

- What is Test Driven Development and why is it important?
- What do you do with existing tests when applying extract class refactoring?
- In what situations is it beneficial to implement all tests first and then follow up with implementation and when it is better to write tests and implementation one by one?
- Having a large number of tests for a unit - when should you make them green one by one, and when it is better to address them en-masse (globally) during implementation?
- What gems can you use for Testing rails applications?
- What types of specs do you know? Can you tell me when to use each of them?
- Can you list some good practices for writing specs in rspec?
- What is the difference between: Stubs/Mocks/Spies/Fakes
- What cool features factory_bot gives you when writing specs?
- What problems can you encounter when using Faker in your spec?
- What is the difference between Fixtures and Factories? When to use them?
