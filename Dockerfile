FROM node
WORKDIR /usr/src/app
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000