FROM node:alpine

LABEL maintainer="Gabriel Jacek Polak"
LABEL description="Zadanie 1"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000
CMD [ "node", "index.js" ]