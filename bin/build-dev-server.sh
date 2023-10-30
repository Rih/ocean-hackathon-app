#!/bin/bash
# docker build -t sales:v1 .
docker-compose -f docker-compose-dev.yml build --no-cache
