#!/bin/sh

[ -z "$AWS_ACCESS_KEY_ID" ] || export AWSCREDS="-e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY"
[ -z "$AWS_SESSION_TOKEN" ] || export AWSCREDS="${AWSCREDS} -e AWS_SESSION_TOKEN"

export AWS_DEFAULT_REGION="${AWS_REGION:-"ap-southeast-2"}"

awscli() {
  docker run --rm \
    -v $WORKSPACE:$WORKSPACE \
    -e AWS_DEFAULT_REGION \
    $AWSCREDS \
    quay.io/intellihr/awscli \
    aws "$@"
}
