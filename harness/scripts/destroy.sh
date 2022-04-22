#!/usr/bin/env bash

run docker-compose down --rmi local --volumes --remove-orphans

if [[ "$SYNC_STRATEGY" = "mutagen" ]]; then
  run ws mutagen stop
  passthru ws mutagen rm
fi

if [[ "$APP_DYNAMIC" = "no" ]]; then
    run "docker images --filter=reference='${DOCKER_REPOSITORY}:${APP_VERSION}-*' -q | xargs --no-run-if-empty docker image rm --force"
fi

run rm -f .my127ws/.flag-built
