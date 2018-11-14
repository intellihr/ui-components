FROM node:8.11.1-alpine@sha256:d0febbb04c15f58a28888618cf5c3f1d475261e25702741622f375d0a82e050d

RUN apk upgrade &&\
    apk --update add git openssh-client

RUN npm install -g --unsafe-perm yarn &&\
    rm -rf /var/cache/apk/*

ENV GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

WORKDIR /code

ADD package.json /code

ADD yarn.lock /code

RUN yarn --frozen-lockfile

ADD . /code
