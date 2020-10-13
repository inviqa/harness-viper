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

configure()
{
    (
        # using publicRuntimeConfig with getInitialProps limits the build time optimisations nextjs is able
        # to perform so we interpolate the correct value at container start to still allow the same docker image
        # to be used in multiple environments.

        cd /app/app/client/.next
        grep -rwl './' -e 'GATEWAY_CSR_URL' | xargs -I '{}' sed -i "s;GATEWAY_CSR_URL;${GATEWAY_CSR_URL};g" '{}'
    )
}

bootstrap()
{
    setup_app_networking
    configure
}

bootstrap

if [ $# -eq 0 ]; then
    exec supervisord -c /etc/supervisor/supervisord.conf -n
else
    exec "$@"
fi
