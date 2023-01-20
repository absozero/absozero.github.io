FROM node:19-alpine

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

