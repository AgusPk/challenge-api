FROM node
WORKDIR /challenge-api
COPY package*.json ./

RUN npm install
CMD ["npm", "run", "dev"]

EXPOSE 3000