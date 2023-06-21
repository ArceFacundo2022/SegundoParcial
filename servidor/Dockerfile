FROM node:18

# Create app directory
WORKDIR /servidor

COPY package*.json /servidor/

RUN npm install

COPY . /servidor/

EXPOSE 3000

CMD ["npm", "run", "dev"]