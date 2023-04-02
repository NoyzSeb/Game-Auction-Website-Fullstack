FROM node:latest AS PRODUCTION

ENV NODE_ENV = production 

WORKDIR /app/src/main/fe_app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh","-c","npm run start"]