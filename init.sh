#!/bin/bash

if [[ -d "lithe" ]]
    then
        echo "Lithe is already checked out."
        exit 0
    else
        git clone https://github.com/rikvanderkemp/lithe
        ln -s lithe/bin/lithe.sh
        echo "Done."
fi