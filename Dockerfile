FROM node:10.16.3

WORKDIR /api

COPY package*.json ./

RUN npm install 

COPY ./ ./

CMD ["node", "./index.js"]
