#stage 1:Build

FROM node:18-alpine3.17 as build

RUN mkdir -p /app

RUN apk update && apk add --no-cache nodejs npm

#RUN npm install -g @angular/cli

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod


RUN ls -alt

#stage 2

FROM nginx:alpine

#ADD ./config/default.conf /etc/ngix/conf.d/default.conf

COPY --from=build /usr/src/app/dist/administration-sc /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


# Run the command to start the server
#CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check", "--poll", "1"]

CMD ["nginx","-g","daemon off;"]



