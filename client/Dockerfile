FROM node:20.11.1-alpine
# Use an official Node.js 20.11.1 image with Alpine Linux

WORKDIR /app
# Set the working directory in the container to /app

COPY package.json ./
# Copy the package.json file into the container

RUN npm install
# Install the dependencies specified in package.json

COPY . ./
# Copy the rest of the files from the current directory into the container

RUN npm run build
# Run the build script specified in package.json

RUN npm i -g serve
# Install the serve package globally

EXPOSE 3000
# Expose port 3000 for the web server

# Serve from the 'build' directory, not 'dist'
CMD ["serve", "-s", "dist"]
# Set the default command to serve the built application from the 'dist' directory

