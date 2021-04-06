+++
title = "API Expertise"
+++

{{%bubble %}}

## API Expertise

**Points:** 2 

**Description:** You can build (or mock) & use standarized APIs as well as document your own API.

**Person who successfully completed requirement for given block can:** 

- Compare, choose and confidently justify the right API building standard for given use case
- Evaluate, recommend and implement the right tooling and way of documenting the API
- Deliver mocked APIs meeting given specification using the adequate tooling
- Design and apply (enforce / lint) API contracts 
- Name, explain, compare and apply a wide range of typically used API authentication/authorization strategies, including OAuth and JWT

{{% /bubble%}}

## Areas

**API Expertise**

- Types of APIs
  - Public API
  - Internal API
- JSON API
- GraphQL
- Documentation
- Versioning
- Authorization
- Authentication

---

## 📦 Types of APIs

- 📙 [Do you need to build public API?](https://nordicapis.com/5-tips-starting-public-api-journey/)

### 🎤 Interview
- Explain the difference between public & internal API?
  - What does it mean that API will be consumed by 3rd parties?
  - What does it mean that API will be consumed within one system/product?
- Explain how would you build an API that will be consumed by 3rd party applications?
- What should we remember of, when we are releasing a new version of Public API?

## 📦 JSON API

### 🎓 Learn

- 📗 [Documentation](https://jsonapi.org/)
- 📗 https://dri.es/headless-cms-rest-vs-jsonapi-vs-graphql
- 📗 https://thoughtbot.com/upcase/videos/rest
- Standard describing API Design based on JSON encoded payloads
  - Format of request/response
  - Pagination
  - Filtering
  - Metadata
  - Manipulation (CRUD)
  - Subsetting / Resource Inclusion

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

---

## 📦 GraphQL

### 🎓 Learn

- 📗 [Documentation](https://graphql.org/)
- 📗 [Spec](https://graphql.github.io/graphql-spec/)
- Advantages
  - Easy to use on frontend (get exactly what they want)
  - Single endpoint
  - Schema exploration
  - Efficient (transport)
  - Statically / Strongly typed
  - Comfortable to extend (especially Read Layer)
  - Does not enforce any transport layer (it can work easily on WebSockets)
- Disadvantages
  - Errors tracking may be problematic (need query analyzer)
  - Lack of standards / good practices for some common tasks (pagination, file upload)
  - Higher level of entry (more complex than i.e. REST or JSON Api)
  - May be difficult to optimize for performance (i.e. n+1)
  - Query can be infinitely complex if such case is not handled properly
- Complexity query
  - Nested (# depth)
  - Complexity (scoring queries)

### 🎤 Interview

- Explain the differences between REST-like APIs and GraphQL
- When GraphQL is a good fit for the application?

### 📝 Katas

- Show me and explain GraphQL code in your application

---

## 📦 Documentation

### 🎓 Learn

- 📗 [Swagger](https://swagger.io/)
- 📗 [OpenAPI Specification](https://www.openapis.org/)
- 📙 [Building APIs with OpenAPI](https://medium.com/@ratrosy/building-apis-with-openapi-ac3c24e33ee3)
- Some API Documentation examples: 
  - https://docs.github.com/en/rest
  - https://stripe.com/docs/api

### 📝 Katas

- Document and present API documentation made with Swagger

---

## 📦 Versioning

### 🎓 Learn

- 📗 [Change strategy](https://nordicapis.com/api-change-strategy/)
- 📗 [Version REST API](https://www.freecodecamp.org/news/how-to-version-a-rest-api/)
- 📗 [API Versioning](https://apisyouwonthate.com/blog/api-versioning-has-no-right-way)
- 📗 [Deprecations](https://swagger.io/specification/#operationDeprecated)

### 🎤 Interview
- How to deal with API version change on the project?
- What's the difference between different type of versioning (Resource/Mime/Method)
- How to handle API deprecations?
- Explain the concept of API versioning
- When it is a good idea to version API?
- When it is not a good idea to version API?

---

## 📦 Authentication

### 🎓 Learn

- 📗 [OAuth](https://oauth.net/)
- 📗 [JWT](https://jwt.io/)
- **OAuth2**:
  - Framework/Tool/Standard allowing delegating authorisation process to specialized provider (authorisation server)
    1. Access request to given resource is sent
    1. Authorisation provider asks user for permission
    1. Callback is sent back to client with token
    1. On backend side, access is requested from authorisation provider using token retrieved
    1. Access credentials are provided by authorisation provider
    1. Communication is performed using credentials retrieved
  - Application needs to be registered on authorization provider side prior to using the process
  - OpenID provides layer over OAuth2 just for authentication
  - 📗 https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
  - 📗 https://www.youtube.com/watch?v=996OiexHze0
  - 📗 https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc

### 🎤 Interview

- Explain JWT
- Should you use cookies for authentication and if yes then when?
- Explain the concept of expired token
- Explain basics of OAuth

### 📝 Katas

- Demonstrate sample usage of OAuth in your application

---

## 📦 Authorization

### 🎓 Learn

- 📗 [RBAC example - React](https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/)
- 📗 [RBAC example - Ember](https://github.com/minutebase/ember-can)
- Authorization is a process of confirming if given identity (already authenticated) should have access to given resource
- Roles implementation
  - flags - simple, straight-forward, require extra column for each role (difficult to extend), easy to search and read. Nice when there are only two roles in the system.
  - enum - simple, straight-forward, quite easy to extend, easy to search and read. Nice when you have many roles and each user has only one.
  - relation based - i.e. rolify. Less performing (more complex SQL queries). More to difficult to filter read. Nice when you have many roles and each user can have many of those and you would like to configure and introduce new roles from UI level.
  - STI - Easy to search and read. Provide contextual place for role-based code out of the box. Hard to extend, as you need to introduce new class to handle it. Nice when you have limited number of roles and each user can have only one. Also when you need to contextualize some of your code per role.
  - Bit encoded - Works similarly to permission setting mechanism in UNIX systems. Each bit represents one role and roles are encoded as integer on DB level. Not easy to read and search, but very efficient to query for. Moderately difficult to extend (just add a new bit, still those need to be in order). Nice when you have many roles and each user can have many of those and you do not need to introduce new ones from UI.

### 🎤 Interview

- What authorization strategy are you using in your apps?

### 📝 Katas

- Present sample usage of yours RBAC-driven app

---
