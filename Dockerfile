# Dockerfile
FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install express

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
#RUN npm run build

EXPOSE 3001

# defined in package.json
CMD [ "npm", "run", "start:server" ]
