From node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "nodemon", "start" ]