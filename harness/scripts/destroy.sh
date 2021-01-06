#!/usr/bin/env bash

run docker-compose down --rmi local --volumes --remove-orphans

if [[ "$SYNC_STRATEGY" = "mutagen" ]]; then
  run ws mutagen stop
  passthru ws mutagen rm
fi

if [[ "$APP_DYNAMIC" = "no" ]]; then
    DOCKER_IMAGE_REFERENCE="${DOCKER_REPOSITORY}:${APP_VERSION}-*"
    if [[ "$DOCKER_REPOSITORY" =~ ':' ]]; then
      DOCKER_IMAGE_REFERENCE="${DOCKER_REPOSITORY}${APP_VERSION}*"
    fi
    run "docker images --filter=reference='${DOCKER_IMAGE_REFERENCE}' -q | xargs --no-run-if-empty docker image rm --force"
fi

run rm -f .my127ws/.flag-built
