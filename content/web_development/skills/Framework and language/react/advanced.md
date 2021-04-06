+++
title = "JavaScript/React - Advanced"
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

## Areas

**React**

- JSX
- Performance
- Handling events
- Accessing DOM elements
- Security
- Error handling
- Routing
- Hooks

**State management**

- Context and state
- Redux
- Handling multiple or chained requests in middleware

**Wizard Forms**

**Testing**

**Patterns**

---

## 📦 React / JSX

Knows differences between class and functional components.

### 🎓 Learn

- 📗 [class vs function component](https://overreacted.io/how-are-function-components-different-from-classes/)
- 📗 [why import React is needed](https://hackernoon.com/why-import-react-from-react-in-a-functional-component-657aed821f7a)

### 🎤 Interview

- What are differences between React class and functional components?
- When we need to import ‘react’?

---

## 📦 React / Performance

Knows how to improve performance and find issues.

### 🎓 Learn

- 📗 [Reconciliation](https://pl.reactjs.org/docs/reconciliation.html)
- 📗 [Chrome devtools](https://developers.google.com/web/tools/chrome-devtools/)
- 📗 [Why-did-you-update v2](https://blog.logrocket.com/make-react-fast-again-part-2-why-did-you-update-dd1faf79399f) (in article is mentioned deprecated package why-did-you-update. Use https://github.com/welldone-software/why-did-you-render instead)
- 📗 [Why-did-you-update v3](https://blog.logrocket.com/make-react-fast-again-part-3-highlighting-component-updates-6119e45e6833)
- 📗 [Should component update](https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/using_should_component_update.html)
- 📗 [Optimizing selectors](https://github.com/reduxjs/reselect#q-why-is-my-selector-recomputing-when-the-input-state-stays-the-same)
- 📗 [Optimizing functional components](https://scotch.io/tutorials/react-166-reactmemo-for-functional-components-rendering-control)

### 🎤 Interview

- How does React decide which components to rerender, and update which DOM elements?
- How can we detect unnecessary rerenders/operations?
- How does the PureComponent/react memo work?
- How can we optimize React performance?
- How can we optimize React with Redux/Mobx performance?

---

## 📦 React / Handling events

Knows how React handles events internally.

### 🎓 Learn

- 📗 [Event pooling](https://reactjs.org/docs/events.html)

### 🎤 Interview

- What’s the difference between React and Browser event?
- What does it mean that React events are pooled?

---

## 📦 React / Accessing DOM elements

Knows how to pass refs to child components.

### 🎓 Learn

- 📗 [Forwarding refs](https://reactjs.org/docs/forwarding-refs.html)
- 📗 [When ref are empty](https://stackoverflow.com/questions/22238320/react-js-refs-are-not-available-on-initial-render)
- 📗 [Refs and function components](https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components)

### 🎤 Interview

- What is ref forwarding used for?
- In which situations the ref might be empty?
- How to use refs with functional components?

---

## 📦 React / Security

Knows possible attack vectors.

### 🎓 Learn

- 📗 [React security](https://medium.com/@baphemot/understanding-react-frontend-security-4963d35feea7)
- 📗 [Avoiding xss](https://medium.com/JavaScript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412)

### 🎤 Interview

- What is xss and when it can happen in React app?
- What are the anti patterns that can make us vulnerable?

---

## 📦 React / Error handling

Knows how to use error boundaries and when they are not effective.

### 🎓 Learn

- 📗 [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- 📗 [CRA adds overlay on error](https://github.com/facebook/create-react-app/issues/3627)

### 🎤 Interview

- What are error boundaries and how to implement them?
- Which errors cannot be caught by error boundary?

### 📝 Katas

- Catch component errors using error boundaries

---

## 📦 React / Routing

Knows types of history and when to use them.

### 🎓 Learn

- 📗 [History](https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd)
- 📗 [Route with redirect](https://serverless-stack.com/chapters/create-a-route-that-redirects.html)

### 🎤 Interview

- What are different types of history used for routing?
- When to use which type of history?
- What’s the difference between history.push and history.replace?

### 📝 Katas

- Implement routes accessible only for certain user roles (other get redirect)

---

## 📦 React / Hooks

Knows how to use useState and useEffect hooks.

### 🎓 Learn

- 📗 [Hooks intro](https://reactjs.org/docs/hooks-intro.html)
- 📗 [Use effect](https://leewarrick.com/blog/react-use-effect-explained/)
- 📙 [Use hooks](https://usehooks.com/)
- 📙 [Fetching data using hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)

### 🎤 Interview

- What are react hooks?
- Do we need to think about the order of defining hooks?

### 📝 Katas

- Add state to functional component
- Add effect that will be called only when relevant props change
- Add effect that will be triggered only when the component is mounted
- Add effect that will be triggered only when the component is unmounted
- Add effect that will be triggered when any component props/state is changed

---

## 📦 State Management / Context and state

Knows how to use Context and understands asynchronous behavior of setState.

### 🎓 Learn

- 📗 [React context](https://reactjs.org/docs/context.html)
- 📗 [Context vs Redux](https://daveceddia.com/context-api-vs-redux)
- 📗 [Getting current state in setState with function argument](https://stackoverflow.com/questions/42494985/setstate-in-react-based-on-current-state/42496452#42496452)
- 📗 [SetState with callback](https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296)

### 🎤 Interview

- What is React Context and how to use it?
- What problems we might have because of asynchronous update of this.state?


### 📝 Katas

- Use React Context to share data across the app

---

## 📦 State Management / Redux

Knows how to structure Redux store and normalize the data.

### 🎓 Learn

- 📗 [Normalization](https://blog.brainsandbeards.com/advanced-redux-patterns-normalisation-6b9a5aa46e1f)
- 📗 [Reselect](https://github.com/reduxjs/reselect)
- 📗 [Hooks vs Redux](https://medium.com/JavaScript-scene/do-react-hooks-replace-redux-210bab340672)
- 📗 [Redux antipatters](https://itnext.io/the-perils-of-using-a-common-redux-anti-pattern-344d778e59da)
- 📗 [Redux architecture](https://medium.com/JavaScript-scene/10-tips-for-better-redux-architecture-69250425af44)
- 📗 [Handling side effects](https://goshakkk.name/redux-side-effect-approaches/)

### 🎤 Interview

- How to keep and update (deeply) nested data?
- Why the data in the store should be normalized after fetching it from the DB?
- Why selectors should be used to get the data from the store?
- How do you handle side effects in redux?

### 📝 Katas

- Implement data normalization between request and redux store
- Implement optimized selectors transforming the data from store to component needs

---

## 📦 State Management / Handling multiple or chained requests in middleware

Knows how to chain or run requests in parallel.

### 🎓 Learn

- 📗 [Chaining promises](https://JavaScript.info/promise-chaining#bigger-example-fetch)
- 📗 [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- 📗 [Fetch request cancellation](https://robwise.github.io/blog/cancel-whatwg-fetch-requests-in-react)
- 📗 [Axios request cancellation](https://github.com/axios/axios#cancellation)

### 🎤 Interview

- How do you make few requests but you need the data from the first one to make next request?
- How do you make few requests at the same time?
- How to cancel requests if they are not needed eg. User navigated to another page?

### 📝 Katas

- Implement fetching multiple requests one by one (the following requests need the data of the previous)
- Implement fetching multiple requests in parallel
- Implement request cancellation

---

## 📦 Wizard Forms

Knows what are wizard forms, and when they can be useful.

### 🎓 Learn

- 📗 [Wizard in Formik](https://github.com/jaredpalmer/formik/blob/master/examples/MultistepWizard.js)
- 📙 [Wizard in Redux form](https://redux-form.com/8.1.0/examples/wizard/)

### 🎤 Interview

- What are multistep/wizard forms?
- Why create multistep form instead of regular one?

---

## 📦 Testing

Knows how to test async code, and code dependent on time.

### 🎓 Learn

- 📗 [Jest timer mocks](https://jestjs.io/docs/en/timer-mocks)
- 📗 [MockDate](https://github.com/boblauer/MockDate)

### 🎤 Interview

- How do you test your application?
- Which parts of application do you test using which kind of tests?

### 📝 Katas

- Tests for asynchronous code (promises/observables)
- Tests for code making requests (thunk or other middleware)
- Tests for code dependent on time (displaying datetime or code using date or time)
- Tests for code dependent on the passing of time (code using timeouts)

---

## 📦 Patterns

Knows RenderProps, Specialization, and Containment patterns and how to test them.

### 🎓 Learn

- 📗 [RenderProps](https://tylermcginnis.com/react-render-props/)
- 📗 [Containment part1](https://twitter.com/dan_abramov/status/1021850251865587712)
- 📗 [Containment part2](https://twitter.com/a_wazard/status/1021861930603036672)
- 📗 [Containment & Specialization](https://reactjs.org/docs/composition-vs-inheritance.html)
- 📗 [Golden Rule for components](https://medium.freecodecamp.org/how-the-golden-rule-of-react-components-can-help-you-write-better-code-127046b478eb)
- 📗 [Containment (here called Compound)](https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992)

### 🎤 Interview

- How does RenderProps work?
- How does the Specialization work?
- How does the Containment work?
- What’s the difference between Containment and RenderProps patterns?
- How to test those constructs?

### 📝 Katas

- Share functionality with render prop and add tests
- Create a generic component used by at least 2 specialized components
- Create a component according to containment pattern
