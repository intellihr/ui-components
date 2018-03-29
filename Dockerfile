FROM node:8.10.0-alpine

RUN apk upgrade &&\
    apk --update add zip git yarn openssh-client &&\
    npm install -g npm typescript &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

WORKDIR /code

ADD . /code
