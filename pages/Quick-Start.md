## Quick Start

### Prerequisites

* SSH key set up for Github
* Docker https://docs.docker.com/install/
* Docker-compose https://docs.docker.com/compose/install/

### Setting up ui-components

* Fork this repository to your own github user.
* Run `git clone git@github.com:<your username>/ui-components.git` in a terminal to clone to a local folder (e.g. `~/Workspace`)
* Navigate to the lapis folder created for this clone.
* Run `yarn` to install npm JS packages into your working folder.
* Run `docker-compose up local` to start the ui-components build and the service.
* You should now be able to connect to the application in your browser using the network address output in the console
