FROM node:8.11.1-alpine@sha256:7daef4e511bcd3655c18cb58bfc382a4391b04c7881c4debc17a5882908917e4

RUN apk upgrade &&\
    apk --update add zip git openssh-client &&\
    npm install -g npm typescript renovate &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

WORKDIR /code

ADD . /code
