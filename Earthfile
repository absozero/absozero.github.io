VERSION 0.6
FROM node:19-alpine
WORKDIR /go-workdir

build:
    COPY . .
    RUN npm install
    SAVE ARTIFACT src/pages/index.astro AS LOCAL local-output/go-example

docker:
    COPY +build/example .
    ENTRYPOINT ["/go-workdir/example"]
    SAVE IMAGE go-example:latest