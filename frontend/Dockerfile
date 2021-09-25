FROM node:14.14.0-alpine3.12

WORKDIR /client

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]