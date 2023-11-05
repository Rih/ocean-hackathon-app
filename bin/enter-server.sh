#!/bin/sh

case "$(uname -s)" in
    Darwin)
    echo 'Mac OS X'
    docker exec -it $(docker-compose -f docker-compose.yml ps -q app_ocean) sh
    ;;
    Linux)
    echo 'Linux'
    docker exec -it $(docker-compose -f docker-compose.yml ps -q app_ocean) sh
    ;;
    CYWGWIN*|MINGW32*|MSYS*|MINGW*)
    echo 'Windows'
    winpty docker exec -it $(docker-compose -f docker-compose.yml ps -q app_ocean) sh
    ;;
esac



