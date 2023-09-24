# FROM --platform=linux/arm64 node:19.2-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
FROM node:19.2-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run test

RUN rm -rf tests && rm -rf node_modules

RUN rm -rf tests

RUN npm install --prod

ENTRYPOINT [ "npm", "start" ]
