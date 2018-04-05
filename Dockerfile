FROM node:8.11.1-alpine@sha256:1b1928c9eea9e6cd5ff6155a2adda33a022a08911a1418f5ebe8ff992abd2a69

RUN apk upgrade &&\
    apk --update add zip git openssh-client &&\
    npm install -g npm typescript renovate &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

WORKDIR /code

ADD . /code
