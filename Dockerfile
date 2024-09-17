# Use Node.js 16-alpine as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /AWS-FCJ-Management

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install nodemon globally and other project dependencies
RUN npm install -g nodemon --save-dev nodemon express dotenv express-handlebars body-parser mysql && npm install

# Copy the rest of your application code
COPY . .

# Expose the port your application will run on (assuming it's 5000)
EXPOSE 5000

# Define the command to start your application
CMD ["npm", "start"]
