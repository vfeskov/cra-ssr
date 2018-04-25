# Welcome
I have been exploring Docker - using `docker-compose` to spin up development environments for several projects. I wanted to find a simple project that would allow me to spin up a server-side rendered (SSR) app based on [create-react-app](https://github.com/facebook/create-react-app).

This project was inspired by the excellent work of [Vladimir Feskov](https://github.com/vfeskov) and his [series of posts](https://vfeskov.com/tags/CRA-with-SSR-series/) covering server-side rendering with [create-react-app](https://github.com/facebook/create-react-app).

The [original repo](https://github.com/vfeskov/cra-ssr) this project was forked from is available at [https://github.com/vfeskov/cra-ssr](https://github.com/vfeskov/cra-ssr).

# Docker
If this is your first time getting Docker setup, please see "Initial setup and configuration" (below)

If you already have Docker images/containers built that you wish to reuse:

`$ docker-compose up -d && docker-compose logs -f`

When you're ready to shut down your Docker containers:

`$ docker-compose down`

## Docker-compose? Why?
Why would we want to use [docker-compose](https://docs.docker.com/compose/overview/)? Imagine the case we want to experiment with incorporating other services (containers) into our app - such as MongoDB, MySQL, Redis...[docker-compose](https://docs.docker.com/compose/overview/) allows us to spin up and spin down these containers as a group.

## Initial setup and configuration
### Install Docker Community Edition
If you do not have Docker installed on your machine, please download and install [Docker Community Edition](https://www.docker.com/community-edition) for your development machine.

### Build and run Docker
If you have [Docker](https://www.docker.com) installed and configured on your development machine, you can spin up the project by running:

`$ docker-compose up -d && docker-compose logs -f`

### Shut down Docker
Once you have finished with your work - or if you would like to stop the project from running:

`$ docker-compose down`

#### BONUS: Docker cheatsheet
I've created several helper scripts in my projects that invoke several Docker commands.

If these scripts are defined within your `package.json` file, you can run them with:

    $ npm run <script>

If these scripts are not defined in your `package.json` file, no problem. I've included the appropriate Docker commands here for reference.

+ docker:containers:list
    - List all Docker containers in your development environment

      `$ docker ps -a`

+ docker:containers:stop
    - Stop all Docker containers in your development environment.

      `$ docker stop $(docker ps -aq)`

+ docker:down
    - This shuts down - but does not delete - Docker containers in your development environment using your latest build.

      `$ docker-compose down`

+ docker:images:list
    - List all Docker images in your development environment.

      `$ docker images`

+ docker:nuke:containers
    - Destroys all containers in your development environment.

      `$ docker rm $(docker ps -aq)`

+ docker:nuke:images
    - Destroy all Docker images in your development environment.

      `$ docker rmi -f $(docker images -q)`

+ docker:nuke
    - This will wipe the slate clean and destroy all Docker containers and images in your development environment.

      ```
      // Stop all running containers
      $ docker stop $(docker ps -aq)

      // Remove all containers 
      $ docker rm $(docker ps -aq)

      // Remove all images 
      $ docker rmi -f $(docker images -q)
      ```

+ docker:up
    - This spins up Docker containers in your development environment using your latest build. Initial terminal output will be a live tail of all Docker logs until you press CTRL+C to exit. Exiting will not shut down your Docker containers; it will only cancel the log output command.

      `$ docker-compose up -d && docker-compose logs -f`

+ docker:up:build
    - This is useful for building your Docker environment for the first time **OR** to rebuild containers and images from scratch. Initial terminal output will be a live tail of all Docker logs until you press CTRL+C to exit. Exiting will not shut down your Docker containers; it will only cancel the log output command.

      `$ docker-compose up --build -d && docker-compose logs -f`

+ docker:up:timestamp
    - If you want to see the timestamp in your logs, this is the command for you. Initial terminal output will be a live tail of all Docker logs until you press CTRL+C to exit. Exiting will not shut down your Docker containers; it will only cancel the log output command.

      `$ docker-compose up -d && docker-compose logs -f -t`
