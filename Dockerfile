FROM node:20-alpine

EXPOSE 80

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . /app

CMD ["npm", "start"]
