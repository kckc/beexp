FROM node:alpine

WORKDIR /app

ADD . /app

RUN npm install && npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]