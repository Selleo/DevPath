+++
aliases = ["backend","elixir", "phoenix", "erlang", "junior"]
title = "Elixir/Phoenix - Basics"
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

**Elixir**

- Overview
- Language basics
- Concurrent programming

**Phoenix**

- Setup
- Routing
- Controllers
- REST API

**Ecto**
- Setup
- Migrations
- CRUD
- Simple aggregates

---

## 📦 Elixir / Overview

Know what is Elixir language, what are the pros and cons. Unique selling points of language.

### 🎓 Learn

- 📗 [Elixir homepage](https://elixir-lang.org/)
- 📗 [Erlang homepage](https://www.erlang.org/)
- 📗 [Elixir School](https://elixirschool.com/en/)

### 🎤 Interview

- What is Elixir?
- What makes Elixir good choice for backend development?
- Can you say something more about the Elixir ecosystem?

---

## 📦 Elixir / Language basics

Elixir language fundamentals.

### 🎓 Learn

  - 📘 [Programming Elixir](https://docs.zoho.eu/ws/pulse/file/1htkm01c29b6d283d4daea77a847862b8f1a0)

  - 📗 [Basic types](https://elixir-lang.org/getting-started/basic-types.html)
  - 📗 [Basic operators](https://elixir-lang.org/getting-started/basic-operators.html)
  - 📗 [Pattern matching](https://elixir-lang.org/getting-started/pattern-matching.html)
  - 📗 [case, cond, and if](https://elixir-lang.org/getting-started/case-cond-and-if.html)
  - 📗 [strings, and charlists](https://elixir-lang.org/getting-started/binaries-strings-and-char-lists.html)
  - 📗 [Keyword lists and maps](https://elixir-lang.org/getting-started/keywords-and-maps.html)
  - 📗 [Modules and Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)
  - 📗 [Recursion](https://elixir-lang.org/getting-started/recursion.html)
  - 📗 [Processes](https://elixir-lang.org/getting-started/processes.html)
  - 📗 [IO](https://elixir-lang.org/getting-started/io-and-the-file-system.html)
  - 📗 [alias, require, and import](https://elixir-lang.org/getting-started/alias-require-and-import.html)
  - 📗 [Module attributes](https://elixir-lang.org/getting-started/module-attributes.html)
  - 📗 [Structs](https://elixir-lang.org/getting-started/structs.html)
  - 📗 [Comprehensions](https://elixir-lang.org/getting-started/comprehensions.html)
  - 📗 [Sigils](https://elixir-lang.org/getting-started/sigils.html)
  - 📗 [Debugging](https://elixir-lang.org/getting-started/debugging.html)
  - 📗 [Introduction to Mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html)
  - 📗 [Agent](https://elixir-lang.org/getting-started/mix-otp/agent.html)

### 🎤 Interview

- What types the Elixir offers?
- Could you explain pattern matching?
- When should you use `^` in pattern matching?
- What is function arity?
- What is difference between map and struct.
- What is linked list?
- What do you know about Elixir's processes?
- What is difference between Elixir's module and ruby/js/etc. class?
- What debugging technics do you know?(in context of Elixri)
- What is mix?
- Explain process linking, what options do we have?
- What are module attributes and what should we know about them?
- How we can inspect process on running system?
- What is the difference between cond, with and case?
- What is the defference between .ex and .exs files
- Compile time vs Runtime differenes.

### 📝 Katas

- Solve 10 alorithmic coding challanges(HackerRank/Exercism/AdventOfCode) with Elixir

---

## 📦 Plug / Overview

Knows Plug library that can be used without phoenix for simple endpoints.

### 🎓 Learn

- 📗 [Plug](https://github.com/elixir-plug/plug)
- 📗 [Plug Phoenix](https://hexdocs.pm/phoenix/plug.html#content)

### 🎤 Interview

- What is Plug?
- How we can implement outr own plugs?
- What is Conn struct?
- How we can use Plug Router?

### 📝 Katas

- Create Plug that measures how much time the request takes.

---

## 📦 Phoenix / Basics

Knows Phoenix web framework and concepts behind it.

### 🎓 Learn

- 📘 [Programming Phoenix](https://docs.zoho.eu/ws/pulse/file/0any6ec09ef68cdcb42d2a765ac79e63587f9)
- 📘 [Testing Elixir](https://docs.zoho.eu/ws/pulse/file/18nkh3ea5185017994a44b3b90879fc971351)

- 📗 [Phoenix website](https://www.phoenixframework.org/)
- 📗 [Setup](https://hexdocs.pm/phoenix/installation.html#content)
- 📗 [Directory structure](https://hexdocs.pm/phoenix/directory_structure.html#content)
- 📗 [Request life-cycle](https://hexdocs.pm/phoenix/request_lifecycle.html#content)
- 📗 [Routing](https://hexdocs.pm/phoenix/routing.html#content)
- 📗 [Controllers](https://hexdocs.pm/phoenix/controllers.html#content)
- 📗 [Views](https://hexdocs.pm/phoenix/views.html#content)
- 📗 [Contexts](https://hexdocs.pm/phoenix/contexts.html#content)
- 📗 [Testing](https://hexdocs.pm/phoenix/testing_controllers.html#content)

### 🎤 Interview

- What are adventages of Phoenix over other solutions on the market?
- What deployment options do we have for phoenix based application?
- Explain briefly the phoenix framework directory structure.
- Could you elaborate about configuration in Phoenix project?
- What are contexts in the scope of Phoenix framework?
- What is the responsibility of `Endpoint` moudle?
- How HTTP works?
- What do you know about request lifecycle?
- What is routing pipeline?
- How would you approach web API versioning?
- Explain me how would you implement JWT based authentication in phoenix.
- [TBU] more questions

---

### 📝 Katas

Create an application with Phoenix Framework which contains:
- Registration
- JWT based authentication
- Roles based authorization
- At least 3 entities logically conected withch each other
- Email notifications(at least one)
- Sorting
- Pagination

The app should be exposed as REST API

All critical features should be covered with automated tests.

If you don't have an idea what app you could create, you could crate a close of sth popular like. Twitter, 9gag,
Meetup.com or use realworld https://github.com/gothinkster/realworld/tree/master/api

All of above feature can be checked via different projects(already done side projects/commercial project/open source)

---

## 📦 Ecto

Know what is Ecto, can perform basic operations on database.

### 🎓 Learn

- 📘 [Programming Ecto](https://docs.zoho.eu/ws/pulse/file/9r39q648392b22b4d47109dd2bb204ff7fcc5)

- 📗 [Ecto](https://hexdocs.pm/ecto/Ecto.html)
- 📗 [Getting started](https://hexdocs.pm/ecto/getting-started.html)

### 🎤 Interview

- What is Repo?
- How to perform migrations?
- What is changeset?
- What is the difference between schema and embeded schema?

### 📝 Katas

- Included in phoenix project.

---

## 📦 Libraries

Additional libraries

### 🎓 Learn

- 📗 [ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html)
- 📗 [guardian](https://github.com/ueberauth/guardian)
- 📗 [bodyguard](https://github.com/schrockwell/bodyguard)
- 📗 [Joken](https://hexdocs.pm/joken/introduction.html)

---
