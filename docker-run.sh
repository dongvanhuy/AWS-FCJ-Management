#!/usr/bin/env bash
echo "Build AWS FCJ Management..."

docker build -t awsfcj .

echo "Build Compeleted!"

echo "Running Application..."

docker run -p 5000:5000 awsfcj