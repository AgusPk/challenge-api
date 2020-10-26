FROM node

# Create app directory
WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm install

CMD [ "npm", "run", "dev" ]