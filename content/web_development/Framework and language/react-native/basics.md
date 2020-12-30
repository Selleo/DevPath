+++
title = "React Native - Basics"
weight = 1
+++

{{%bubble %}}

## Framework & Language Basics

**Points:** 2

**Description:** You can build simple Mobile App, that have basic functionalities and user experience. Utilize library responsible for common requirements that normal mobile app should meet.

**Person which succesfully completed requirement for given block can:**

- Run React Native application on Android or iOS simulator or device.
- Can debug using ReactNativeDebuger or Flipper, with usage od console statements.
- Can describe why ReactNative can be chosen over other Native/Hybrid solutions
- Can style elements with ease
- Can create simple navigation inside project

{{% /bubble%}}

After finishing this course you should be able to run an ReactNative environment with running application, create components, utilize navigation and write test with jest.

## Areas

**Ember Basic Concepts I**
- Application structure
- Models
- Router
- Route

**Ember CLI**
- Start a new application
- Addons
- Commands
- Application file structure
- Build

**Templates & Helpers**
- Can explain diff between helper and component
- Know how to write helpers
- Know and use helpers
- Conditionals: if, unless
- Lists: each, each-in, else
- Forms: input, textarea

**Tooling**
- Know how to run / Build ember project (also in production mode)
- Know how to run tests in development (console / browser ) and in CI (Circle CI)
- Know how to use ember inspector
- Know how to debug application
- Know all the packages in package.json
- Know the app structure
- using ember-cli, generators, blueprints

**Routing I**
 - can explain how the routing works, how router translate path to route, and what is the relation with controller and the template
 - use application, index, wildcard route
 - use nested route and use dynamic segments (router, route)

**Components I**
- Communication with the outside world: Data Down | Actions Up | Services
- handling actions for component
- tracked property

**Ember Data I**
- What is the role of models in the application
- Understand of Ember data basic
- Defining and working with models
- Relationships

**Unit Tests**
- can explain when write test for what
- can explain how tests are executed (in: dev / browser / ci)
- skill to write unit tests (utils | helpers)

---

## React / Basic knowledge

There are some basic concepts of ReactJS that each ReactNative developer should know about before start working with library.

**React**

- [Validating props structure](../../react/01_level_1.md#-react--validating-props-structure) (original React path)
- [Performance](../../react/01_level_1.md#-react--performance) (original React path)

**State management**

- [React state and props](../../react/01_level_1.md#-state-management--react-state-and-props) (original React path)
- [Redux](../../react/01_level_1.md#-state-management--redux) (original React path)

**Forms**

- [Forms](../../react/01_level_1.md#-forms) (original React path)
- [Validation](../../react/01_level_1.md#-forms--validation) (original React path)

---

## 📦 ReactNative / Overview

You need to know that it is actually React Native and Expo. Should be able to answer questions about pros and const vs native apps.

### 🎓 Learn

- 📗 [ReactNative page](https://facebook.github.io/react-native/)
- 📗 [Expo vs Vanila RN](https://apiko.com/blog/expo-vs-vanilla-react-native/)
- 📗 [Metro](https://medium.com/@rishabh0297/role-of-metro-bundler-in-react-native-24d178c7117e)
- 📙 [More info about RN](https://ideamotive.co/react-native-development-guide/)

### 🎤 Interview

- What is RN and who create it/maintain it?
- What are the advantages of use RN over Native
- What dependencies you need to build and run RN app on iOS and Android
- What is expo? Cons and pros using it?
- What is the metro?

### 📝 Katas

- Setup React Native app (with latest version of library) on Android or iOS (can be simulators)

---

## 📦 ReactNative / Debugging

I need to check if you know how to debug RN app with usage of React Native DevTools or Flipper (choose one, Flipper should work out-of-box in latest RN)

### 🎓 Learn

- 📗 [Info about debbuging](https://facebook.github.io/react-native/docs/debugging.html#accessing-the-in-app-developer-menu)
- 📗 [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- 📗 [Flipper tutorial video](https://www.youtube.com/watch?v=qsaNOILmSXw)

### 🎤 Interview

- How to turn on debugger on simulator and real device?
- Show me how to inspect element in RN (by clicking on the element inside the app) and change one of the props

### 📝 Katas

- Install React Native Debugger (or Flipper) and debug app by using it

---

## 📦 ReactNative / Linking

From react-native 0.60 linking is easier (almost out-of-box), however when adding libraries to our project it is important for run for example `pod install`. However, you need to know what is grandle and cocoapods.

### 🎓 Learn

- 📗 [Cocoapods](https://cocoapods.org/)
- 📗 [Gradle](https://stackoverflow.com/questions/16754643/what-is-gradle-in-android-studio)
- 📙 (deprecated) [Linking](https://facebook.github.io/react-native/docs/linking-libraries-ios.html)

### 🎤 Interview

- Why do we need to link?
- What is cocoapods? How to run them?
- What is gradle?

### 📝 Katas

- Add react-navigation to project
- Add react-native-vector-icons to project

---

## 📦 ReactNative / Styling

I need to know that you are able to style components, by using original ReactNative StyleSheets or StyledComponents

### 🎓 Learn


- 📗 [StyleSheets Cheat Sheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)
- 📗 [FlexBox](https://facebook.github.io/react-native/docs/flexbox)
- 📗 [get height/width of screen](https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad)
- 📙 [StyledComponents](https://www.styled-components.com/)

### 🎤 Interview

- How to apply styles to components?
- Why we use array as styles? Why you should consider using flatten when applying styles? (tricky one, answer is not required)
- How to get height / width of screen?

### 📝 Katas

- Using flexBox create an input with clear icon (x) - components that you can use are `View`, `TextInput`, `Icon` (material vector-icons, check [Linking](#-reactnative--linking))
- `TextInput` and `Icon` should be wrapped with `View` that have some border
- `Icon` should be on the right of `TextInput`
- `TextInput` should have blue background and white text and take all the remaining space

---

## 📦 ReactNative / Navigation

Instead of React Router we have React Navigation that is a leading library in case of navigation in RN community

### 🎓 Learn

- 📗 [Project Homepage](https://reactnavigation.org/)
- 📗 [Crating sample navigation](https://www.youtube.com/watch?v=p_9K0N0yDvU)
- 📙 [Auth Flow](https://reactnavigation.org/docs/en/auth-flow.html)

### 🎤 Interview

- How to navigate from screen to another?
- How to go back?
- Drawer? What it is?
- Show sample navigation structure
- Push vs navigate?
- Other RN alternatives for Navigation

### 📝 Katas

- Show simple stack navigation with at least one back action

---

## 📦 ReactNative / Platform specific code

Sometimes we need to apply code only to iOS or Android platform

### 🎓 Learn

- 📗 [Official Documentation](https://facebook.github.io/react-native/docs/platform-specific-code.html)
- 📙 [Nice Article](https://medium.com/maestral-solutions/react-native-platform-specific-code-e217db5778f)

### 🎤 Interview

- How to use Platform.select to add platform specific styles?
- How to render component conditionally?

### 📝 Katas

- Using `&&` or tendary render `<Text>iOS it the best</Text>` only on `iOS`

---

## 📦 ReactNative / Lists

Very offen we using virtual list components to render some results from B/E

### 🎓 Learn

- 📗 [Custom ListView](https://medium.com/@benhur.quintino/react-native-creating-a-custom-listview-9cdc2868a6fa)
- 📙 [SectionList height](https://medium.com/@jsoendermann/sectionlist-and-getitemlayout-2293b0b916fb)
- 📗 [FlatList](https://medium.com/sanjagh/how-to-optimize-your-react-native-flatlist-946490c8c49b)

### 🎤 Interview

- Can you say in own words what is virtualization?
- What is diff between SectionList and FlatList?
- What is RefreshControl?
- What prop trigger FlatList re-render?

### 📝 Katas

- Render list of months using FlatList - every 3rd month should have blue name

---

## ReactNative / Testing

- 📗 [ReactNativeTestingLibrary](https://github.com/callstack/react-native-testing-library)
- 📗 [ReactNativeTestingLibrary + Jest](https://www.youtube.com/watch?v=CpTQb0XWlRc)

### 📝 Katas

- Setups specs and run specs (can be problematic because of Navigation, feel free to reach me in case of troubles)
- Write specs that checks if your implementation of list that render blue name in every 3rd entry is valid
