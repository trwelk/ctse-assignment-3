# get the base node image
FROM node:17-alpine

# set the working dir for container
WORKDIR /app

# copy the json file first
COPY ./package.json /app

# install npm dependencies
RUN npm install  --legacy-peer-deps

# copy other project files
COPY . .

ENV REACT_APP_NODE_BACKEND_URL=/api
EXPOSE 3000

# build the folder
CMD [ "npm", "start" ]