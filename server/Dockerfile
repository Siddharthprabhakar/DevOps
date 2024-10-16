# Use an official Node.js runtime as a parent image
FROM node:21.6-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose port 5000 for the app
EXPOSE 5000

# Command to run nodemon for development
CMD ["npm", "run", "dev"]
