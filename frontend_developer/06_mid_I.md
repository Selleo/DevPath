+++
aliases = ["frontend","javascript","typescript","react","ember","css", "Mid"]
title = "Mid - level I"
author = "Selleo"
+++

## Areas

**Competence**

- Build tools

**Language & Browser API**

- IndexedDB

**Libs**

- RxJS

---

## 📦 Competence / Build tools

### 🎓 Learn

- 📗 [Webpack](https://webpack.js.org)
- 📗 [Gulp](https://gulpjs.com)
- 📗 [Rollup](https://rollupjs.org/guide/en/)
- 📗 [Babel](https://babeljs.io/)
- 📙 [Parcel](https://parceljs.org)
- 📙 [Broccoli](https://broccoli.build) (Ember world)

### 🎤 Interview

- Why big libraries are using [Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) approach?
- What is a task runner?
- What is a bundler?
- If you like to support JS feature that is not available in your browser yet, how would you do it?
- How would you configure Webpack so you can use TypeScript in your JS app?

### 📝 Katas

- Create and show me a simple JS task, that will generate a changelog (use for ex. [lerna](https://github.com/lerna/lerna-changelog))
- Create and show me an automated script that will take all `.jpg` files from `source/images/` directory, resize them so they are not bigger than `500x500` pixels and save into `dist/images/` directory.

---

## 📦 **Language & Browser API** / Local storage

### 🎓 Learn

- 📗 [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- 📗 [Direct usage examples](https://www.tutorialdocs.com/article/indexeddb-tutorial.html)
- 📗 [Dexie](https://dexie.org/)

### 🎤 Interview

- When would you use IndexedDB instead of Local Storage or Session storage?
- What are the limitations of IndexedDB?
- What is transaction?
- Why it is good that IndexDB is transactional?
- How to handle migration in IndexedDB?
- Explain the role of `IDBCursor`
- Explain the difference between `KeyPath` and `KeyGenerator`.

### 📝 Katas

- Build an simple app that uses IndexDB (could be via library), for storing recipes with calories. Display list of all recipes sorted by calories (ascending).

---

## 📦 **Libs**

### 🎓 Learn

- 📗 [Introduction](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- 📗 [Concepts](https://www.learnrxjs.io/concepts/)
- 📗 [RxJS](https://rxjs.dev)
- 📗 [Examples](https://angularfirebase.com/lessons/rxjs-quickstart-with-20-examples/#4-Hot-vs-Cold-Observables)
- 📙 [Examples #2](https://x-team.com/blog/rxjs-observables/)
- 📙 [Deep dive](https://github.com/btroncone/learn-rxjs)

### 🎤 Interview

- What is Reactive Programming
- When would you use RxJS? Elaborate about the meaningful example.
- Explain `observable`
- Explain [hot and cold observables](https://medium.com/@luukgruijs/understanding-hot-vs-cold-observables-62d04cf92e03)
- Elaborate about `Subject` vs `BehaviorSubject`
- Elaborate about `mergeMap` vs `flatMap`
- Explain `combineLatest`
- How to use `interval` and provide an usage example

### 📝 Katas

- Build a simple application with a chart. Use RxJS to generate the chart data series for Bitcoin & Etherum. Every second, RxJS should randomly generate add new value (in the specified range for each currency). Present last 30 values of the currencies on the chart. Update with animation every time when the data series has changed.
