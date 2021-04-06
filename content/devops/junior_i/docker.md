+++
title = "Docker"
+++

{{%bubble %}}

## DOCKER

**Required**

**Description:** You can comfortably work with Docker.


**Person who successfully completed requirement for given block can:**

- Create Docker images for backend application
- Use community images in his day-to-day job
- Prepare docker-compose file for project you work on

{{% /bubble%}}

### 🎓 Learn
  - [Docker Docs](https://docs.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/compose-file/)
  - [Devhints](https://devhints.io/docker)
  - [Docker Playground](https://labs.play-with-docker.com)

### 📝 Katas
**Note:**
If you have created already a dockerfile and docker-compose for a project you work on it can be used instead of the exercises listed below.

- Prepare a *Dockerfile* which will run [sample script](https://github.com/Selleo/docker_sample_script)
- Prepare a *Dockerfile* which will install a working (nodejs, npm, yarn) environment for a nodejs application in version defined in `NODE_VERSION` environment variable. Please **DO NOT USE** containers delivered by community.
- Prepare a working *docker-compose.yml* file which will run [advanced rails application](https://github.com/Selleo/docker_sample_app). All of the components should be run using docker.

* Rails 5.2 application with Ruby 2.5.1
* PostgreSQL 10.5
* Redis 4.0
* Memcached 1.5

The app is using:

* Websockets
* Sidekiq as a background worker
* Nginx on the top
* Memcached as a cache storage

> **Note:**
> Feel free to use containers delivered by community.
TODO: Provide link to nginx configuration

### 🎤 Interview
- What is Docker?
  - Docker is an open source tool for running isolated containers on Linux making the deployment of apps inside containers faster. Docker creates portable, self-sufficient containers from any application.
  - The same container that the developer builds and tests on his PC can run in production, on VMs, in the cloud and a lot more places.
- Why should I use Docker?
  - consistent development environment for entire team - you need only Docker to develop
  - it helps to minimize the differecens between local and production environments
  - environment is isolated from developer's OS and other tools
- Explain commands used in your Dockerfile
- Most commmon Docker commands







