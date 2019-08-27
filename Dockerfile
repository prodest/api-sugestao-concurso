FROM registry.es.gov.br/espm/infraestrutura/containers/node:10-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000