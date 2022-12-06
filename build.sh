#!/bin/bash

DOCKER_IMAGE_BASENAME=mp-be-service

docker build . -t ${DOCKER_IMAGE_BASENAME}