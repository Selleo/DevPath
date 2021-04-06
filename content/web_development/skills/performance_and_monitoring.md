+++
title = "Performance and monitoring"
+++

{{%bubble %}}

## Performance and monitoring

**Points:** 2

**Description:** You can identify performance weak-spots and adress them, both in development phase via load test technics, as well as during the life-cycle of the application, via proper monitoring of the app.

**Person who successfully completed requirement for given block can:**

- Has strong and working knowledge in setting up and leveraging a wide range of performance monitoring and error tracking tools
- Is capable of precisesly identifying reasons behind performance problems in web applications
- Has strong skillset in using load testing tools to prepare peak-load and volume testing scenarios and is capable of determining maximum throughput for given environment
- Is capable of recommending right infrastructure configuration to meet performance needs

{{% /bubble%}}

## Areas

**Performance**
- Monitoring
- Analysis
- Profiling in browser
- Load & stress testing

---

## 📦 Performance / monitoring

#### 🔨 Tools

**Basic SaaS solutions:**

- [Appsignal](https://appsignal.com/)
- [Scout](https://scoutapm.com/)
- [Sentry](https://sentry.io/)
- [Skylight](https://www.skylight.io/) (RoR only)

**All-rounders:**

- [New Relic](https://newrelic.com/)
- [Datadog](https://www.datadoghq.com/)

**Open source:**

- [Prometheus](https://prometheus.io/)
- [Graphite](https://graphiteapp.org/)
- [Zabbix](https://www.zabbix.com/)
- [Grafana](https://grafana.com/) (visualisation)

**Error tracking:**
- [Rollbar](https://rollbar.com/)
- [Airbrake](https://airbrake.io/)
- [Bugsnag](https://www.bugsnag.com/)
- [Honeybadger](https://www.honeybadger.io/)

💡 Some of the APM tools listed above provides an error tracking features too.

#### 🎓 Learn

**Browser**
- 📗 [Source Maps](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
- 📗 [web.dev - vitals](https://web.dev/vitals)
- 📗 [web.dev - metrics](https://web.dev/metrics)

#### 🎤 Interview

- What aspects should be considered before selecting APM tool?
- Which APM tools you’ve worked with? Share your thoughts about each of them.
- What aspects should be considered before selecting error tracking tool?
- Which error tracking tools you’ve worked with? Share your thoughts about each of them.
- Explain the role of source maps in error reporting (browser part)

#### 📝 Katas

- Integrate preferred SaaS tool in your app (or present some existing integration).
- Set up preferred open-source monitoring tool and integrate it in your app.
- How would you configure error reporting in various environments? Show me how your project handles multiple environments setup.

## 📦 Performance / analysis

### 📦 Profiling

#### 🎤 Learn

- [How do Ruby/Python profilers work](https://jvns.ca/blog/2017/12/17/how-do-ruby---python-profilers-work-/)
- [Understanding ruby app with profiling](https://katafrakt.me/2020/05/03/understanding-ruby-app-with-profiling/)
- [Erlang Profiling](http://erlang.org/doc/efficiency_guide/profiling.html)

#### 🔨 Tools

- [rbspy](https://github.com/rbspy/rbspy)
- [stackprof](https://github.com/tmm1/stackprof)
- [ruby-prof](https://github.com/ruby-prof/ruby-prof)
- [Mix.Tasks.Profile.Eprof](https://hexdocs.pm/mix/Mix.Tasks.Profile.Eprof.html)
- [exprof](https://github.com/parroty/exprof)

#### 🎤 Interview

- Explain what the profiling is and what is its purpose
- What are most the common profiling strategies?
- Profiling vs tracing vs benchmarking - point the differences

#### 📝 Katas

- Profile a part of your app, visualise and explain the results (e.g. on flamegraph)

### 📦 Benchmarking

#### 🎤 Learn

- [Benchmarking Ruby code #1](https://blog.appsignal.com/2018/02/27/benchmarking-ruby-code.html)
- [Benchmarking Ruby code #2](https://scoutapm.com/blog/benchmarking-ruby-code)
- [Benchmarking Elixir with Bunchee](https://elixircasts.io/benchmarking-with-benchee)

#### 🔨Tools

- [Ruby - Benchmark module](https://ruby-doc.org/stdlib-2.5.0/libdoc/benchmark/rdoc/Benchmark.html)
- [Elixir - benchee](https://github.com/bencheeorg/benchee)

#### 📝 Katas

- Benchmark a piece of code and explain the results

### 📦 Garbage collection

#### 🎤 Learn

- [Garbage collection fundamentals](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals)
- [Ruby garbage collection - 101](https://scoutapm.com/blog/ruby-garbage-collection)
- [Ruby garbage collection - deep dive](https://jemma.dev/blog/gc-mark-and-sweep)
- [Garbage collection in BEAM](https://blog.stenmans.org/theBeamBook/#CH-Memory)

#### 🎤 Interview
- Garbage collector - what it is, what is its purpose?

## 📦 Profiling in browser

### 🎓 Learn

- 📗 [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- 📗 [Memory leaks discovery](https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/)
- 📗 [Runtime performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)
- 📗 [Speed up web page guide](https://auth0.com/blog/12-steps-to-a-faster-web-app/)
- 📙 [Analyze web performance with PageInsights](https://devrix.com/tutorial/analyze-web-page-performance-using-google-pagespeed-insights/)

### 🎤 Interview

- What you can do to make your app faster? (at least 7 things)
- Explain the concept of optimistic UI.

### 📝 Katas

- How you can check your app fps?
- Make (and show me) a website that will reach 90+ score in **PageInsights** test.
- How you can identify memory leak in your application?

## 📦 Performance / Load & stress testing

#### 🔨 Tools

- [wrk](https://github.com/wg/wrk)
- [vegeta](https://github.com/tsenart/vegeta)
- [k6](https://github.com/loadimpact/k6)
- [JMeter](https://jmeter.apache.org/)
- [Gatling](https://gatling.io/)

#### 🎓 Learn

- [Open source load testing tool review](https://k6.io/blog/comparing-best-open-source-load-testing-tools)

#### 🎤 Interview

- What’s the purpose of load and stress testing?
- How should the load testing process be done? Describe some key guidelines.

#### 📝 Katas

- Perform load/stress test on your application using preferred tool

---

## 🎓 Additional Resources
#### 🎓 Learn

**Ruby**
- 📙 [Hunting ruby memory issues](https://www.toptal.com/ruby/hunting-ruby-memory-issues)
- 📙 [RailsConf 2019 - Profiling and Benchmarking 101](https://www.youtube.com/watch?v=XL51vf-XBTs)
- 📙 [Pragmatic programmers - what makes ruby code slow](https://medium.com/pragmatic-programmers/what-makes-ruby-code-slow-94cc17447511)
- 📙 [Performance tips for ruby on rails](https://www.mskog.com/posts/42-performance-tips-for-ruby-on-rails/)
- 📙 [Ruby performance tuning](https://stackify.com/ruby-performance-tuning/)
- 📙 [Rails performance tips](https://www.codewithjason.com/rails-performance-tips/)

#### 🔨 Tools

**Ruby**

- 📙 [Ruby performance tools - summary](https://github.com/JuanitoFatas/ruby-performance-tools)
- 📙 [fasterer](https://github.com/DamirSvrtan/fasterer)
- 📙 [bullet](https://github.com/flyerhzm/bullet)

**Elixir**

- 📙 [A tour of elixir performance monitoring tools](https://hackernoon.com/a-tour-of-elixir-performance-monitoring-tools-aac2df726e8c)

