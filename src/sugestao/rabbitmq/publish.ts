#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

export class PublishQueue {
  publish(obj) {
    amqp.connect(
      'amqp://fpgktngg:6-Sq5YfaHEXjydofFJ86gp1mogR282Qz@barnacle.rmq.cloudamqp.com/fpgktngg',
      function(error0, connection) {
        if (error0) {
          throw error0;
        }
        connection.createChannel(function(error1, channel) {
          if (error1) {
            throw error1;
          }

          const base = 1000;
          let inicio = 0;
          let fim = base;
          let tamanho = obj.cpf_candidatos.length;
          let lista_cpf;

          while (inicio != fim) {
            lista_cpf = obj.cpf_candidatos.slice(inicio, fim);
            let push_Mensage = {
              users: lista_cpf,
              title: obj.titulo,
              message: obj.mensagem,
            };
            try {
              channel.assertQueue('filapublish', {
                durable: false,
              });
              let myJSON = JSON.stringify(push_Mensage);
              channel.sendToQueue('filapublish', Buffer.from(myJSON));
            } catch (e) {
              console.log('erro ao enviar dados ' + e);
              throw new Error('abortado!');
            }

            inicio = fim;
            fim + base < tamanho ? (fim += base) : (fim = tamanho);
          }
        });
        setTimeout(function() {
          connection.close();
          process.exit(0);
        }, 500);
      },
    );
  }
}
