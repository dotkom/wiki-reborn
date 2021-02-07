FROM node:10

WORKDIR /srv/frontend

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
