FROM node:10

WORKDIR /home/nodejs/app
RUN chown -R node:node /home/nodejs/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]

