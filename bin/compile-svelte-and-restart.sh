#!/bin/sh

git pull origin main
docker exec -it $(docker-compose ps -q app_ocean) pnpm run build
sh bin/stop-server.sh

case "$1" in
    dev|d)
    echo 'Development'
    sh bin/start-dev-server.sh   
    ;;
    test|t)
    echo 'Testing'
    sh bin/start-testing-server.sh   
    ;;
    prod|p*)
    echo 'Production'
    sh bin/start-prod-server.sh   
    ;;
esac
