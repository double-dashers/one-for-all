# the build process
FROM node:10.13.0 AS build-deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npm install react-scripts -g --silent
RUN yarn build

# the production environment
FROM nginx:stable-alpine
WORKDIR /app
COPY --from=build-deps /app/build /usr/share/nginx/html