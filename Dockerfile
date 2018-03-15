FROM node:8.10.0-alpine

RUN apk upgrade &&\
    apk --update add git yarn openssh-client &&\
    npm install -g typescript &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

VOLUME /code
WORKDIR /code

# these are added here to force yarn to install whenever they are updated
ADD yarn.lock /code
ADD package.json /code

# Install dependencies
RUN yarn
RUN npm rebuild node-sass

ADD . /code
