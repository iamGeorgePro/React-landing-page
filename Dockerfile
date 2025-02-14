FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 and start the app
EXPOSE 3000
CMD [ "npm", "start" ]
