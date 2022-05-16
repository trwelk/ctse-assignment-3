# geting the base node image
FROM node:17-alpine

# setting the working dir for container
WORKDIR /app

# copying the json file first
COPY ./package.json /app

# installing  dependencies
# adding flag because of version bumping issues
RUN npm install  --legacy-peer-deps

# copying all other project files
COPY . .

# Set environment variable for 
ENV REACT_APP_NODE_BACKEND_URL=/api
EXPOSE 3000

# build the folder
CMD [ "npm", "start" ]