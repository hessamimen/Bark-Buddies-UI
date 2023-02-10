#! /usr/bin/env bash

docker  run --rm -it \
        --network bootcamp \
        --name ui \
        -p 80:3000 \
        bootcamp/ui:1.0