# Test Node App

Use this docker image to test an http service in any environment that can use docker images.

## Getting Started

1. `docker run -it --rm -p 8000:80 wesbragagt/test-node-app`

2. `curl localhost:8000`

3. `<h1>Test Node App</h1>`

## Routes

`/` -> success message in text/html

`/crash` -> crash the service

Any other route will respond with 404
