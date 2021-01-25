+++
title = "React Native - Advanced"
weight = 2
+++

{{%bubble %}}

## Framework & Language Basics

**Points:** 2

**Description:** Know how to support more advance libraries that comes with Mobile features like push notifications, animation or maps support. Also know how to setup Appcenter to build app for beta testers.

**Person which succesfully completed requirement for given block can:**

- Tutaj dodajemy wszystkie punkty pozostałe
-

{{% /bubble%}}

After finishing this course you should be able to run an ReactNative environment with running application, create components, utilize navigation and write test with jest.

## Areas

**Performance and Optimization**
- Is able to tell what it a bridge
- Knows about limitations of JS thread
- Knows best rendering practice
- Knows what is Hermes
- Knows how to limit re-renders

**Formik advanced**
- Knows how to focus field on demand
- Knows how to reset form or particular field
- Able to write complex validations
- Knows about Formik API methods
- Knows how to handle errors from B/E

**Testing advanced**
- Knows how to test/mock navigation
- Knows how to mock native libraries/particular files
- Know how to mock date
- Knows how to mock and test async code

**Deployment of an app with AppCenter**
- Knows how to setup Appcenter
- Knows how to build/distribute Android app through Appcenter
- Able to use Codepush

**Error handling and user's feedback**
- Knows how to setup tools for errors handling
- Is aware of source maps and know that they need to be send and how
- Is aware of other ways to get feedback from users
- Knows what is a breadcrumb

**Push Notifications**
- Is aware of Push Notifications - know what is FPN (Firebase) and APN
- Knows how to setup them inside app
- Knows how to setup Firebase Project
- Knows the difference between push notification and in-app notification

**Offline**
- Knows why app should work in offline mode
- Knows how to setup app with redux-offline
- Writes offline redux action creators

---

## 📦 ReactNative / Performance and Optimization

You need to know a bit about performance troubles writing code in React Native.

### 🎓 Learn

- 📗 [The Ultimate Guide to React Native Optimization eBook](https://callstack.com/blog/download-the-ultimate-guide-to-react-native-optimization-ebook/)
- 📗 [React Native Performance Guide](https://reactnative.dev/docs/performance)
- 📗 [How to boost performance of RN apps](https://www.merixstudio.com/blog/react-native-performance/)
- 📙 [ReactNative Cold Start for Android](https://mattermost.com/blog/how-we-improved-our-react-native-cold-start-for-android/)


### 🎤 Interview

- What is Hermes?
- Why we should consider using daysjs over momentjs?
- How to remove console logs from production build?
- Describe difference between controlled and uncontrolled component?
- How to limit re-renders inside code?

### 📝 Katas

- Create uncontrolled input inside Habit form - check if it works in both create and update case
- Setup removing console from production build inside app
- Wrap code (for example responsible for handling form submit) into `InteractionManager.runAfterInteraction`

---

## 📦 ReactNative / Formik advanced

Need to know how work with advanced Formik concepts

### 🎓 Learn

- 📗 [useFormik hook](https://formik.org/docs/api/useFormik)
- 📗 [Focus next input](https://stackoverflow.com/a/32753780/2493361)
- 📗 [Condition validation with Yup](https://stackoverflow.com/a/56216753/2493361)

### 🎤 Interview

- What we can use to focus any input inside form?
- How to setup errors after failure request (inside onSubmit method)?

### 📝 Katas

- Upon entering new/edit habit form name input should autofocus
- Add additional field into Habit form called 'description', put it under 'name', after entering enter inside 'name' we should go to next input and focus on it
- Near each 'name' and 'description' should be a clear icon that triggers input cleaning (you can use handleChange)
- Inside navigation header put an reset button to reset form into initial values (clues: innerRef, useLayoutEffect() + navigation.setOptions)

---

## ReactNative / Testing advanced

Writing specs for JavaScript that using native code integration can be tricky, developer should be aware of this problems.

- 📗 [ReactNativeTestingLibrary](https://github.com/callstack/react-native-testing-library)
- 📗 [ReactNativeTestingLibrary + Jest](https://www.youtube.com/watch?v=CpTQb0XWlRc)
- 📗 [MockDate](https://github.com/boblauer/MockDate)

### 🎤 Interview

- Describe in your own words what is mock?
- How to mock date/time?
- How to test async code? How to write specs that checks if Promise resolve/reject?
- How to write mock that mimic Promise resolve/reject?

### 📝 Katas

- Mock AsyncStorage (you can check documentation) - you added it probably together with ReduxPersist
- Write a test that will check if you navigate to Habit create screen upon clicking into 'Add' button
- set and check if inside Settings we render right text (React Native Basic / Platform specific code), write second test for second Platform
- Inside setting render information about current time (it does not need to refresh) and write a test that mock date (you can use MockDate library)

---

## 📦 ReactNative / Deployment of an app with AppCenter

You need to know how to build an app and deploy to testers via AppCenter. Additionally how to setup and use Codepush.

### 🎓 Learn

- 📗 [AppCenter](https://appcenter.ms/)
- 📗 [CodePush](https://github.com/microsoft/react-native-code-push)
- 📗 [Android app bundles](https://developer.android.com/guide/app-bundle)

### 🎤 Interview

- What features AppCenter offers?
- What is Codepush?
- Describe what is a difference between Android APK and application bundle? Which one we should upload?

### 📝 Katas

- Create organization and project on AppCenter
- Deploy Android app using AppCenter and send a build to google.play[at]selleo.com
- Setup codepush within app and show that it is working (for example by changing background inside Settings)

---

## 📦 ReactNative / Error handling and user's feedback

You need to setup Bugsnag or Crashlytics as a error handler provider and setup it inside an app. Bugsnag is recommended.

### 🎓 Learn

- 📗 [BugSnag](https://www.bugsnag.com/)
- 📗 [Bugsnag ReactNative](https://github.com/bugsnag/bugsnag-react-native)
- 📗 [Handling errors and user's feedback in React Native](https://www.youtube.com/watch?v=QxG7fmOsJ84&t=1s)
- 📙 [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics)
- 📙 [Firebase ReactNative implementation](https://github.com/invertase/react-native-firebase)

### 🎤 Interview

- Why we need to send source maps to Bugsnag? And how to do it?
- What tools you can use to get feedback from user about problems with an app?
- What is breadcrumb and what they can tell us?

### 📝 Katas

- Create an account on Bugsnag or Firebase Crashlytics
- Setup an app with provided tool
- Show an error on a platform (you don't need to send source maps)

---

## 📦 ReactNative / Push Notifications

Developer should be worry about notifications that comes externally into the app. We recommend using Firebase to handle notifications through APN.

### 🎓 Learn

- 📗 [Firebase Push Notification](https://firebase.google.com/docs/cloud-messaging)
- 📗 [ReactNativeFirebase Messaging](https://rnfirebase.io/messaging/usage)
- 📙 [APN](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1)
- 📙 [ReactNativeNotifications](https://github.com/wix/react-native-notifications)

### 🎤 Interview

- What is a push notification?
- What is a difference between push notification and in-app notification?
- How to handle app navigation after clicking into push notification?
- Is there a way to handle notification additionally when app is closed?
- Are you aware of data only notifications? Does they trigger notifications? How to handle them inside app?
- What is required to send notification from Backend?

### 📝 Katas

- Setup Firebase project
- Setup react-native-firebase/messaging with given project
- Get FCM token (you can use console.log)
- Show notification on a screen (Android device required). You can trigger it on a Firebase console.

---

## 📦 ReactNative / Offline

User know how to implement offline actions withing app using redux-offline and redux-persist.

### 🎓 Learn

- 📗 [ReduxOffline](https://github.com/redux-offline/redux-offline)
- 📗 [ReduxOffline config](https://github.com/redux-offline/redux-offline/blob/develop/docs/README.md)
- 📗 [ReduxPresist](https://github.com/rt2zz/redux-persist)

### 🎤 Interview

- What is effect/rollback/commit?
- What is discard? How it behave by default?
- How to omit reducer in rehydration (redux-persist)?
- How we can check length of redux-offline queue?


### 📝 Katas

- Setup redux-offline within app
- Write a method with redux-offline that will fetch latest data inside settings after clicking into some refresh buttons near this information. Use http://worldtimeapi.org/ to get time.

---
