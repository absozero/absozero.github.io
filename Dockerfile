FROM node:19-alpine

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM httpd:2.4
COPY --from=0 /app/dist /usr/local/apache2/htdocs/

