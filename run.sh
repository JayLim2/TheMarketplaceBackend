#!/bin/bash

DOCKER_IMAGE_BASENAME=mp-be-service

docker run -p 3000:3000 ${DOCKER_IMAGE_BASENAME}