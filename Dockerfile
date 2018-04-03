FROM node:8.10.0-alpine@sha256:a55d3e87802b2a8464b3bfc1f8c3c409f89e9b70a31f1dccce70bd146501f1a0

RUN apk upgrade &&\
    apk --update add zip git openssh-client &&\
    npm install -g npm typescript renovate &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

WORKDIR /code

ADD . /code
