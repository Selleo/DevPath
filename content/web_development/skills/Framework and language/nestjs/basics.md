+++
aliases = ["nodejs", "express", "nestjs", "junior", "rest", "api"]
title = "NestJS - Basics"
weight = 1
+++

{{%bubble %}}

## Framework's Basics

**Points:** 2

**Description:** You can use the basic features of NestJS to deliver common features.

**Person who successfully completed requirement for given block can:**

- **deliver** simple and typical **functionalities** with **little to no additional help**,
- **present** the problem and explored **solutions clearly and in detail** when asking for help,
- **debug** simple problems within the application's (not framework's) code **using the right tooling**,
- **leverage** the most commonly used **standard library**'s capabilities,
- **use** known **packages and libraries**.

**Prerequisites:**

- [JavaScript's basics](../javascript/basics)
- [TypeScript's basics](../typescript/basics)
- [Persistence's basics](../../persistence/basics)

{{% /bubble%}}

## Areas

### NestJS

- REST API
- Controllers
- Services
- Pipes
- Guards
- Events
- Testing
- Configuration
- Dependency Injection
- Modules
- Routing

---

## 📦 NestJS

In this section you will build a NestJS application with most common features and gain working knowledge about NestJS.

### 🎓 Learn

- [Express JS Crash Course (watching - 1h 14min)](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [Express - Request Methods (reading, 30min)](https://expressjs.com/en/api.html#req)
- [Express - Response Methods (reading, 30min)](https://expressjs.com/en/api.html#res)
- [Official NestJS Course (watching, ~ 5h)](https://learn.nestjs.com)
- An alternative to the official course: [Opanuj NestJS i zostań profesjonalnym programistą Node.js (watching, 16h 10min)](https://www.udemy.com/course/kurs-frameworka-nest-js)

### 📝 Katas

- Create a simple express app with all CRUD end-points. Discuss with your mentor the requirements for the app.

**Useful Libraries**

The useful libraries can be found in [the content bank](./content_bank.md).

**A Sample Application's Description**

- Admin panel
    - Admin user created from DB seeds
    - Admin can create users in admin panel
        - When admin creates a user then email and password (autogenerated) are sent via email
    - Admin can manage categories and products
        - add categories (just a name, uid, and description)
        - add products (name, uuid [unique!], image, description, at least one category, number of products in stock)
        - edit categories/products
        - remove categories (if no products are connected)
        - archive product (set archived_at field to time when it happened, archived products cannot be purchased after this time)
    - Admin can see paginated list of categories (with filters and search)
    - Admin can see paginated list of products (with filters and search)
    - Admin can see paginated list of purchases (with filters and search)
    - Admin can export filtered purchases to XLS
    - Admin can import products with CSV file
    - Admin can view statistics of sold products
- User panel
    - User can log in by email/password
    - User can reset password
    - User can edit email, password, first name, last name
    - User cannot access admin panel namespace
    - User can buy a product (number of products in stock is decreased)
    - User can see history of his purchases
- Implement REST api for products (all actions)
- Implement authorization on top of this application, use it in proper places
- Implement a state machine for purchases
- Use exception handling in controller and in one of your service objects
- Use three code analysis packages
- Use passport.js for authentication
- Add sign up, login, reset password

### 🎤 Interview

During a verification, we will go through the questions located in the following list. 
Prepare an application that can present answers for these points. 
During the session, you will be asked to perform a programming drill to implement a couple of points from the list, e.g., to create a partial config or a service.

#### REST API

- Describe the main purpose of controllers. ([answer](https://docs.nestjs.com/controllers))
- List a couple of decorators for controller actions. ([answer](https://docs.nestjs.com/controllers#:~:text=%20the%20standard%20http%20methods))
- Describe how to access route parameters, query parameters, and body of a request. (answers: [route params](https://docs.nestjs.com/controllers#route-parameters), [query params](https://docs.nestjs.com/controllers#:~:text=%40query(key%3F%3A%20string)), [body](https://docs.nestjs.com/controllers#:~:text=%40query(key%3F%3A%20string)))
- What would be the reasoning behind moving logic from a controller to a service? (answer: *think about large controller's functions and refactoring it*)
- Why would you use modules in a NestJS app? ([answer](https://docs.nestjs.com/modules#:~:text=%20the%20resulting%20architecture%20will%20employ%20multiple%20modules))
- Tell me about the usage of `imports`, `exports`, `controllers`, and `providers` in the definition of a module. ([answer]())
- Why would you use Data Transfer Object in controllers? ([answer](https://docs.nestjs.com/controllers#:~:text=a%20dto%20is%20an%20object%20that))
- List and briefly describe a couple of built-in pipes. ([answer](https://docs.nestjs.com/pipes))
- Describe how to explicitly convert incoming data. ([answer](https://docs.nestjs.com/techniques/validation#explicit-conversion))
- Describe how to use auto-validation for incoming data ([answer](https://docs.nestjs.com/techniques/validation#auto-validation))
- Describe how to access the request-related data such as headers, cookies in the controller's action? (answers: [cookies](https://docs.nestjs.com/techniques/cookies#cookies), [headers](https://docs.nestjs.com/controllers#:~:text=%40headers(name%3F%3A%20string)))
- Describe the purpose and usage of a guard. ([answer](https://docs.nestjs.com/guards))
- List and briefly describe a couple of built-in HTTP exceptions ([answer](https://docs.nestjs.com/exception-filters#built-in-http-exceptions))
- Describe the usage of an exception filter ([answer](https://docs.nestjs.com/exception-filters#exception-filters-1))
- Describe how to schedule regular tasks for CRON ([answer](https://docs.nestjs.com/techniques/task-scheduling))
- Describe how to create queues and add jobs to be executed by a queue ([answer](https://docs.nestjs.com/techniques/queues))
- Describe how to use a logger. ([answer](https://docs.nestjs.com/techniques/logger#using-the-logger-for-application-logging))

#### TypeORM

If you use another ORM in your project, answer these question for the ORM you use.

- List and briefly describe a couple of built-in TypeORM functions to create an entity. ([answer](https://typeorm.io/#/entities/what-is-entity))
- Describe different relations between entities and give an example for each of them. (answers: [one-to-one](https://typeorm.io/#/one-to-one-relations/), [many-to-one](https://typeorm.io/#/many-to-one-one-to-many-relations), [many-to-many](https://typeorm.io/#/many-to-many-relations))
- Explain how to inject a repository into the service. ([answer](https://docs.nestjs.com/techniques/database#:~:text=this%20module%20uses%20the%20forfeature()%20method%20to%20define%20which%20repositories))
- Describe how to register a repository as a service and how to expose the repository to the other modules. ([answer](https://docs.nestjs.com/techniques/database#:~:text=%20imports%3A%20%5Btypeormmodule.forfeature(%5Buser%5D)%5D%2C%20providers%3A%20%5Busersservice%5D%2C%20controllers%3A%20%5Buserscontroller%5D%2C))
- Briefly describe how to use a DB transaction. ([answer](https://docs.nestjs.com/techniques/database#transactions))
- Tell me about loading an entity with its relationships (e.g., `findOne` - what kind of parameter, and how to load nested relations). ([answer](https://typeorm.io/#:~:text=call-,To%20load%20a%20user,const,-userRepository))

#### Dependency Injection

- How would you mark a class as to be injected? ([answer](https://docs.nestjs.com/providers#:~:text=the%20%40injectable()%20decorator%20attaches%20metadata%2C%20which%20declares%20that%20catsservice))
- What are the reasonable usages of the following custom providers: `useValue`, `useClass`, `useFactory`, and `useExisting`?  ([answer](https://docs.nestjs.com/fundamentals/custom-providers#custom-providers-1))
- What are the reasons for the existence of these provider scopes: `DEFAULT`, `REQUEST`, and `TRANSIENT`? ([answer](https://docs.nestjs.com/fundamentals/injection-scopes#provider-scope))

#### Configuration

- What is the difference between `ConfigModule.forRoot` and `ConfigModule.forFeature`? (answers: [for root](https://docs.nestjs.com/techniques/configuration#getting-started), [for feature](https://docs.nestjs.com/techniques/configuration#partial-registration))
- Why would you use a partial registration for loading configuration for the application? ([answer](https://docs.nestjs.com/techniques/configuration#partial-registration))
- How to access loaded env variables in the NestJS application? ([answer](https://docs.nestjs.com/techniques/configuration#using-the-configservice))

#### Testing

- Describe a structure of a unit test (test's location, test's content). ([answer](https://docs.nestjs.com/fundamentals/testing#unit-testing))
- Describe a structure of an end-to-end test (test's location, test's content). ([answer](https://docs.nestjs.com/fundamentals/testing#end-to-end-testing))
- How do you replace real providers with mocks in a unit test? ([answer](https://docs.nestjs.com/fundamentals/testing#overriding-globally-registered-enhancers))
