# FROM --platform=linux/arm64 node:19.2-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install


FROM node:19.2-alpine3.16 as builder_tester
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npm run test

FROM node:19.2-alpine3.16 as prod_deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod_deps /app/node_modules /app/node_modules
COPY app.js ./
COPY tasks/ ./tasks
ENTRYPOINT [ "node", "app.js" ]
