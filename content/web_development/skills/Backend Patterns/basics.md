+++ aliases = ["backend", "patterns"]
title = "Back-End Patterns - Basic"
weight = 2 +++

{{%bubble %}}

## Basic Back-End Patterns

**Points:** 1

**Description:** You can apply the best practices across the framework while delivering solution.

**Person who successfully completed requirement for given block can:**

- Comprehend, design and deliver a full range of functionalities with no need for consultation (yet intuitively knows, when to ask for second opinion)
- Demonstrate debugging skills for a full range of problems within application, also by investigating the framework code
- Identify all framework capabilities and best-practices
- Name, explain, choose and apply a wide range of software design patterns to solve particular problems
- Demonstrate strong skills in TDD/BDD

{{% /bubble%}}

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
