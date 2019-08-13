FROM registry.es.gov.br/espm/infraestrutura/containers/node:10.15.3

WORKDIR /app
RUN mkdir /src

COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY src/ /app/src

EXPOSE 3000

CMD ["npm","run", "start"]

