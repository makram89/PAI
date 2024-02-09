FROM node:17-alpine AS builder

# Create directory in container image for app code
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . ./


CMD [ "npm", "start" ]
