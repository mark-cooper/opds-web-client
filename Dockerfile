FROM node:8-alpine

RUN mkdir -p /home/node/app && \
    chown -R node:node /home/node/ && \
    apk add --no-cache bash git openssh

USER node

WORKDIR /home/node/app
COPY packages/server/package.json .

RUN npm install

COPY --chown=node:node packages/server .

ENV OPDS_WEB_CLIENT_JS_URL=https://unpkg.com/opds-web-client@latest/dist/opds-web-client.js \
    OPDS_WEB_CLIENT_CSS_URL=https://unpkg.com/opds-web-client@latest/dist/opds-web-client.css \
    NODE_ENV=production \
    NPM_CONFIG_PREFIX=/home/node/.npm-global \
    PATH=/home/node/.npm-global/bin:$PATH \
    PORT=3000

EXPOSE 3000
CMD ["node", "index.js"]
