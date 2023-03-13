## Run node 15 container sharing the current directory as a volume to the container 
`docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash`

## Build the production docker image (using the Dockerfile.prod)
`docker build -t franciscogsilverio/express-hello-word . -f Dockerfile.prod`
