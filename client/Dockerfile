FROM node:21.6-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

RUN npm i -g serve

EXPOSE 3000

# Serve from the 'build' directory, not 'dist'
CMD ["serve", "-s", "dist"]
