#!/bin/bash
# docker build -t sales:v1 .
docker-compose -f docker-compose.yml build --no-cache
