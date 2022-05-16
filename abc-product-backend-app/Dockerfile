# geting the base node image
FROM node:14-alpine3.13

# setting the working dir for container
WORKDIR /app

# copy the json file first
COPY ./package.json /app

# installing  dependencies
RUN npm install 

# copying all other project files
COPY . .

EXPOSE 9090/tcp

# build the folder
CMD ["node", "server.js"]