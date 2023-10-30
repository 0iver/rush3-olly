#!/usr/bin/env bash

go run . -productUrl 'https://www.totalwine.com/' -profile "$(cat profile_test.json)"
