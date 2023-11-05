FROM node:18.16-alpine

RUN apk add --progress vim
RUN yarn global add pm2 pnpm@8.5.1


RUN mkdir -p /app
RUN mkdir -p /usr/local/scripts
RUN mkdir -p /usr/local/entrypoint
RUN mkdir -p /code/web
RUN mkdir -p /usr/local/logs

WORKDIR /app

COPY ./entrypoint-web.sh /usr/local/entrypoint/entrypoint-web.sh

RUN chmod +x /usr/local/entrypoint/entrypoint-web.sh

COPY ./app/package*.json ./
# COPY ./package*.json ./

RUN pnpm install

COPY ./app ./

# USER node
RUN pnpm run build
CMD ["node", "build/index.js"]

EXPOSE 3000
EXPOSE 4000