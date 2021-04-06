+++
title = "JavaScript/React - Basics"
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
- Can use Redux and related tools
- Is capable of leveraging the most commonly used React capabilities
- Has working knowledge of the most commonly used packages/libraries

**Prerequisites:** [Styling basics](/web_development/skills/styling/01_junior_i/)

{{% /bubble%}}

## Areas

**React**

- Overview
- CRA
- JSX
- Components
- Hooks
- Devtools
- Performance
- Codebase structure
- Routing
- Forms
- Testing

**Redux**

- Overview
- Setup
- Usage
- Devtools
- Testing

---

## 📦 React / Overview

After this section you will know what is React and what it's used for.

### 🎓 Learn

- 📗 [react main page](https://reactjs.org/)

### 🎤 Interview

- What is React and what is it used for?
- What are the main features of React?

---

## 📦 React / CRA

After this section you will know how to use CRA to quickly setup React application.

### 🎓 Learn

- 📗 [Create React App](https://github.com/facebook/create-react-app)

### 🎤 Interview

- What is create-react-app and how to use it?
- What you would need to do in order to setup a React application without CRA?

### 📝 Katas

- Setup application using CRA

---

## 📦 React / JSX

After this section you will know how to use JSX, how it differs from HTML and how to use ClassNames package

### 🎓 Learn

- 📗 [Conditional rendering](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)
- 📗 [ClassNames package](https://github.com/JedWatson/classnames)

### 🎤 Interview

- What is the JSX?
- What are the differences between JSX and HTML?
- What methods to conditionally render UI do you know?
- How to render UI from data array?
- How are event handlers assigned to the UI?
- Why it’s better to define handler method as fat arrow than assign it using fat arrow?
- Why React components need to be capitalized when using in JSX? eg. <MyComponent> not <myComponent>
- What is React Fragment?
- What is React Portal?
- What is the use case for the ClassNames package

### 📝 Katas

- Render parts of the UI conditionally
- Display list of data
- Handle user interaction using event handlers
- Use ClassNames package for conditional class assignment

---

## 📦 React / Components

After this section you will know how to use React Components, manage state and perform effects in them.

### 🎓 Learn

- 📗 [Class vs Function component with hooks](https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg)
- 📗 [Class vs Function component differences](https://overreacted.io/how-are-function-components-different-from-classes/)
- 📗 [Preventing memory leaks](https://egghead.io/lessons/react-stop-memory-leaks-with-componentwillunmount-lifecycle-method-in-react)
- 📗 [Unidirectional data flow](https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e)
- 📗 [React keys](https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7)
- 📗 [Reset React Component using key](https://medium.com/@albertogasparin/forcing-state-reset-on-a-react-component-by-using-the-key-prop-14b36cd7448e)
- 📗 [Prop-Types](https://github.com/facebook/prop-types)

### 🎤 Interview

- What is React Component?
- What are the two types of Components and what are the differences between them?
- What are the props of the Component?
- How to validate props using PropTypes package?
- What is "key" Component property for?
- How to reset React Component (force component unmount and mount)
- How to manage state in Class Component?
- What are the lifecycle methods of Class component?
- How to perform cleanups in a Class component? eg. clearing intervals
- What are the React Hooks?
- How to manage state with useState hook in Function Component?
- How does the useEffect hook work and when it is triggered?
- How to perform cleanups in a Function component? eg. clearing intervals
- What does it mean that React has Unidirectional data flow?

### 📝 Katas

- Create Class component with state and use lifecycle methods.
- When the Class component unmounts clear interval added using setInterval.
- Create Function component with useState and useEffect hooks.
- When the Function component unmounts clear interval added using setInterval.
- Use PropTypes package to validate props structure.

---

## 📦 React / Hooks

After this section you will know commonly used React hooks and React-Use package.

### 🎓 Learn

- 📗 [React refs guide](https://dmitripavlutin.com/react-useref-guide/)
- 📗 [React-Use](https://github.com/streamich/react-use)

### 🎤 Interview

- What does the useCallback hook do and when to use it?
- What does the useMemo hook do and when to use it?
- What does the useRef hook do and when to use it?
- What does the useReducer hook do and when to use it?
- What is React Context, and what is its use-case?
- How to create and consume React Context?
- React-Use is package providing multitude of helpful hooks. Which of them you think might be useful for you? What they do?

### 📝 Katas

- Use useCallback, useMemo, useRef and useReducer hooks in your app.
- Add React Context and consume it in a few components.
- Use a few React-Use hooks in your app.

---

## 📦 React / Devtools

After this section you will know how to effectively use React Development tools.

### 🎓 Learn

- 📗 [React Devtools walk-through](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)

### 🎤 Interview

- What are React Devtools?

### 📝 Katas

- Show how to find a Component in React Devtools (From Elements tab, From App UI, By component name)
- Show how to inspect Component (display state & props & hooks values, change state & props)
- Show how to debug Component (display its HTML element, display Source, access the component from the console)

---

## 📦 React / Performance

After this section you will know how to prevent common programming mistakes degrading React performance.

### 🎓 Learn

- 📗 [Correct key for lists](https://medium.com/information-and-technology/a-simple-list-render-optimization-for-react-ef0a133e9c86)
- 📗 [Fat arrow function as event handler](https://stackoverflow.com/a/48740930/4349813)
- 📗 [Pass memoized data and callbacks to components](https://blog.bitsrc.io/optimize-your-react-functional-components-with-usecallback-and-usememo-34bb52bc9a13)
- 📗 [Optimization by reorganization](https://overreacted.io/before-you-memo/)

### 🎤 Interview

- What practices degrade React performance and how to fix them?

### 📝 Katas

- Make sure your app is free from the discussed performance bad practices :)

---

## 📦 React / Codebase structure

After this section you will know how to organize project files in a clear manner.

### 🎓 Learn

- 📗 [Project structure](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
- 📗 [How to organize application](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

### 🎤 Interview

- How to organize project files?

---

## 📦 React / Routing

After this section you will know how to implementing routing in React SPA application.

### 🎓 Learn

- 📗 [React router](https://reacttraining.com/react-router/web/guides/quick-start)
- 📗 [Router concepts](https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12)

### 🎤 Interview

- How do you handle routes in your app?
- How to pass and use params as part of url?
- How to programmatically redirect to another route?

### 📝 Katas

- Implement routing for a few pages
- Pass and use params through the url (eg. users/:userId)
- Redirect programmatically using history object (from React Router)

---

## 📦 React / Forms

After this section you will know how to create basic forms and validate user input.

### 🎓 Learn

- 📗 [Formik](https://github.com/jaredpalmer/formik)
- 📗 [yup.js](https://github.com/jquense/yup/)
- 📗 [Button default action](https://stackoverflow.com/a/10836076)
- 📗 [Controlled vs uncontrolled components](https://stackoverflow.com/a/42522792)

### 🎤 Interview

- Why using form library (like Formik) is often preferable over creating forms without such library?
- What are Wizard Forms and why use them rather than regular forms?
- What is the Button default type and why it is important in the context of forms?
- What is the Difference between Controlled Component and Uncontrolled Component?
- Does it make sense to validate forms on the frontend, as advanced users can disable it?

### 📝 Katas

- Implement Create and Edit Form in your app. Preferably both cases should be handled by the same component.
- Create Wizard form in your app.
- Implement form with array of fields (eg. user can add multiple addresses each consisting inputs for city, zip-code and street. User should be able to add as many addresses as needed. User should be able to remove addresses)
- Add validation to the form using the Yup library
- Add validation for fields depending on each other (eg. when user selects agreement to receive email, validate the age is over 18. Otherwise do not validate age is over 18)

---

## 📦 React / Testing

After this section you will know how to test React application

### 🎓 Learn

- 📗 [Jest.js](https://jestjs.io/)
- 📗 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- 📗 [TDD with React Testing Library](https://typeofweb.com/tdd-react-testing-library/)
- 📗 [Axios mock adapter](https://www.npmjs.com/package/axios-mock-adapter)
- 📗 [Factory girl](https://github.com/aexmachina/factory-girl)

### 🎤 Interview

- What is TDD?
- What does Jest and React Testing Library do?
- What should we test in React application?
- How to mock requests and provide example data?

### 📝 Katas

- Develop a few components or the whole app using TDD (should be verifiable by commit history)

---

## 📦 Redux / Overview

After this section you will know what is Redux, what are its use-cases and when it is not needed.

### 🎓 Learn

- 📗 [Redux introduction](https://redux.js.org/introduction/getting-started)
- 📗 [When Redux is not needed](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- 📗 [Functional programming paradigms](https://hackernoon.com/functional-programming-paradigms-in-modern-JavaScript-immutability-4e9751ca005c)

### 🎤 Interview

- What is Redux?
- What is the use case(s) for Redux?
- When Redux would be an overkill?

---

## 📦 Redux / Setup

After this section you will know how to setup Redux with React.

### 🎓 Learn

- 📗 [React-Redux](https://react-redux.js.org/)
- 📗 [React Devtools extension install](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pl)
- 📗 [React Devtools extension setup](https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux)

### 🎤 Interview

- How do you connect Redux to React app and use it to manage application state?
- How to setup your app to communicate with redux devtools?
- What is the suggested structure of Redux files?

### 📝 Katas

- Add Redux to your app using react-redux package.
- Setup Redux devtools extension.

---

## 📦 Redux / Usage

After this section you will know how to use Redux in the React app.

### 🎓 Learn

- 📗 [Redux step-by-step](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092)
- 📗 [Seamless immutable](https://medium.com/@ckoster22/seamless-immutable-an-alternative-to-immutablejs-12795d6bf577)
- 📗 [Reselect](https://github.com/reduxjs/reselect)
- 📗 [Selectors v2](https://blog.brainsandbeards.com/advanced-redux-patterns-selectors-cb9f88381d74)
- 📗 [Action constant types](https://itnext.io/namespacing-redux-action-type-constant-values-90b932eea43f)
- 📗 [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- 📗 [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)

### 🎤 Interview

- Can you mutate redux store data? Why?
- What is the benefit of using Seamless Immutable library?
- What elements does Redux have and what are their responsibilities?
- What’s the flow from user interaction through redux and back to UI?
- Can multiple reducers handle the same action?
- What are action constant types and why they are useful?
- What is Redux middleware and what is Redux Thunk?
- How is Redux Thunk useful?
- What is Flux Standard Action and what properties they have?

### 📝 Katas

- Implement at least one CRUD reducer, all needed action creators and selectors.
- Use Seamless Immutable in reducers.
- Use Reselect library to create selectors.
- Use Redux Thunk for action creators.
- Use Redux in the React app.
- Create all actions in your app according to Flux Standard Action structure.

---

## 📦 Redux / Devtools

After this section you will know how to use Redux Devtools to debug application.

### 🎓 Learn

- 📗 [Redux devtools](https://github.com/reduxjs/redux-devtools)
- 📗 [Redux devtools debugging tips](https://blog.logrocket.com/redux-devtools-tips-tricks-for-faster-debugging/)

### 🎤 Interview

- What are Redux devtools?

### 📝 Katas

- Walk me through the redux devtools features.

---

## 📦 Redux / Testing

After this section you will know how to test Redux in your application.

### 🎓 Learn

- 📗 [Testing Redux](https://redux.js.org/recipes/writing-tests#async-action-creators)
- 📗 [Testing Reselect composed selectors](https://github.com/reduxjs/reselect/issues/76#issuecomment-267433461)

### 🎤 Interview

- Why do we need tests for Redux?
- What parts of Redux should we test, how?

### 📝 Katas

- Add tests for reducers and action creators.
- Add tests for selectors containing logic.

---

## 📝 Application

### 💯 Requirements

- Make sure your app is free from the discussed performance bad practices :)

- Develop a few components or the whole app using TDD (should be verifiable by commit history)

### ✨ Features

- Setup application using CRA
- Add Redux to your app using react-redux package.
- Setup Redux devtools extension.

- Render parts of the UI conditionally
- Display list of data
- Handle user interaction using event handlers
- Use ClassNames package for conditional class assignment

- Create Class component with state and use lifecycle methods.
- When the Class component unmounts clear interval added using setInterval.
- Create Function component with useState and useEffect hooks.
- When the Function component unmounts clear interval added using setInterval.
- Use PropTypes package to validate props structure.

- Use useCallback, useMemo, useRef and useReducer hooks in your app.
- Add React Context and consume it in a few components.
- Use a few React-Use hooks in your app.

- Implement routing for a few pages
- Pass and use params through the url (eg. users/:userId)
- Redirect programmatically using history object (from React Router)

- Implement Create and Edit Form in your app. Preferably both cases should be handled by the same component.
- Create Wizard form in your app.
- Implement form with array of fields (eg. user can add multiple addresses each consisting inputs for city, zip-code and street. User should be able to add as many addresses as needed. User should be able to remove addresses)
- Add validation to the form using the Yup library
- Add validation for fields depending on each other (eg. when user selects agreement to receive email, validate the age is over 18. Otherwise do not validate age is over 18)

- Implement at least one CRUD reducer, all needed action creators and selectors.
- Use Seamless Immutable in reducers.
- Use Reselect library to create selectors.
- Connect Redux to the UI (dispatch actions, get data from selectors)

### 🛠 Tools usage skills

- Show how to find a Component in React Devtools (From Elements tab, From App UI, By component name)
- Show how to inspect Component (display state & props & hooks values, change state & props)
- Show how to debug Component (display its HTML element, display Source, access the component from the console)
- Walk me through the redux devtools features.
