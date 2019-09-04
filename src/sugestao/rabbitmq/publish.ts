#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

export class PublishQueue {
  publish(msgS) {
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
          var queue = 'fila';
          var msg = msgS;
          for (let index = 0; index < msgS[0].cpf_candidatos.length; index++) {
            const element = msgS[0].cpf_candidatos[index];
            channel.assertQueue(queue, {
              durable: false,
            });

            channel.sendToQueue(queue, Buffer.from(element));
            console.log(' [x] Sent %s', element);
          }
        });
        setTimeout(function() {
          connection.close();
          process.exit(0);
        }, 500);
      },
    );
  }

  send(queue, mensagem, channel) {}
}
