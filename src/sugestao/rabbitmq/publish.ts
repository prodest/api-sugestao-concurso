#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

export class PublishQueue {
  publish(obj) {
    amqp.connect(process.env.RABBIT_URL, function(error0, connection) {
      if (error0) {
        throw error0;
      }
      connection.createChannel(function(error1, channel) {
        if (error1) {
          throw error1;
        }

        for (let index = 0; index < obj.length; index++) {
          const base = 1000;
          let inicio = 0;
          let fim = base;
          let tamanho = obj[index].cpf_candidatos.length;
          let lista_cpf;

          while (inicio != fim) {
            lista_cpf = obj[index].cpf_candidatos.slice(inicio, fim);
            let push_Mensage = {
              users: lista_cpf,
              title: obj[index].titulo,
              message: obj[index].mensagem,
            };
            try {
              channel.assertQueue(process.env.QUEUE, {
                durable: false,
              });

              let myJSON = JSON.stringify(push_Mensage);

              channel.sendToQueue(process.env.QUEUE, Buffer.from(myJSON));
            } catch (e) {
              console.log('erro ao enviar dados ' + e);
              throw new Error('abortado!');
            }

            inicio = fim;
            fim + base < tamanho ? (fim += base) : (fim = tamanho);
          }
        }
      });
      setTimeout(function() {
        connection.close();
        process.exit(0);
      }, 500);
    });
  }
}
