#!/bin/bash

setup_app_networking()
{
    # make linux consistent with docker-for-mac
    if [ "${HOST_OS_FAMILY}" = "linux" ]; then
        DOCKER_INTERNAL_HOST="host.docker.internal"
        if ! grep $DOCKER_INTERNAL_HOST /etc/hosts > /dev/null ; then
            DOCKER_INTERNAL_IP=$(/sbin/ip route|awk '/default/ { print $3 }')
            echo -e "$DOCKER_INTERNAL_IP    $DOCKER_INTERNAL_HOST" | tee -a /etc/hosts > /dev/null
        fi
    fi
}

bootstrap()
{
    setup_app_networking
}

if [ $# -eq 0 ]; then
    exec supervisord -c /etc/supervisor/supervisord.conf -n
else
    exec "$@"
fi
