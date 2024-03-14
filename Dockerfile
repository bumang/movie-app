FROM node:20-alpine

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY pnpm-lock.yaml /usr/src/app/
RUN npm install -g pnpm@8.15.2
RUN pnpm install

COPY . /usr/src/app

RUN pnpm run build
EXPOSE 3000

CMD "pnpm" "start"