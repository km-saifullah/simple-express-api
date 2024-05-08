FROM node:20-alpine3.18

LABEL author="Khaled Md Saifullah"

COPY package.json /app/ 

COPY . /app/ 

WORKDIR /app 

RUN npm install

EXPOSE 8000

CMD [ "node","server.js" ] 
