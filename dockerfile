FROM node:8.9.4

RUN apt-get update -qq && apt-get install -y build-essential
EXPOSE 6060

ADD . /code
WORKDIR /code

#  Install dependencies
RUN yarn

RUN npm rebuild node-sass

