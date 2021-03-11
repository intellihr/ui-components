#!/bin/sh -e

WORKSPACE="${WORKSPACE:-$(pwd)}"
. "${WORKSPACE}/.ci/scripts/helpers.sh"

[ ! -z "$AWS_ASSUME_ROLE_ARN" ] || (echo '$AWS_ASSUME_ROLE_ARN not set!' && exit 1)
ROLE_SESSION_NAME="${ROLE_SESSION_NAME:-${BUILD_TAG:-"assume-role-script"}}"

CREDENTIALS=$(
  awscli sts assume-role \
    --role-session-name "${ROLE_SESSION_NAME}" \
    --role-arn "${AWS_ASSUME_ROLE_ARN}" \
    --query "Credentials.[AccessKeyId, SecretAccessKey, SessionToken]" \
    --output text
)

echo "${CREDENTIALS}"
