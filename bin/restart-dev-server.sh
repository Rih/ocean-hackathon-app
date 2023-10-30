#!/bin/bash

#docker-compose rm -f web # to take changes from a build
echo "Stopping.."
docker-compose -f docker-compose-dev.yml stop
docker-compose -f docker-compose-dev.yml up --detach
echo "Site development running"
