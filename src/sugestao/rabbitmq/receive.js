#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

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

      var queue = 'filapublish';

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.consume(
        queue,
        function(msg) {
          console.log(JSON.parse(msg.content.toString())['message']);
        },
        {
          noAck: true,
        },
      );
    });
  },
);
