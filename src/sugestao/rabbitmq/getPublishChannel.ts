import * as conf from '../rabbitmq/config/rabbitmq.config';
import * as amqp from 'amqplib';


export async function getPublishChannel (obj): Promise<amqp.Channel> {

  let conn: amqp.Connection;
  let channel: amqp.Channel;
  
  while ( channel == undefined ) {
      try {
        conn = await amqp.connect( conf.amqp_url );
        
      } catch ( err ) {
          console.log( `[ getPublishChannel ] Falha ao tentar se conectar ao rabbitMQ. ${err.message}` );
      }
      if ( conn ) {
          try {
              channel = await conn.createChannel();
            
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar o canal de produção no rabbitMQ. ${err.message}` );
              channel = undefined;
          }
          try {
              await channel.assertExchange( conf.rabbitTopicName, 'topic', { durable: false } );
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar um topico no rabbitMQ. ${err.message}` );
              channel = undefined;
          }

          try {
              await channel.assertQueue( conf.rabbitPublishQueueName, { messageTtl: conf.rabbitPublishTTL, durable: false } );
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar a fila de publicação no rabbitMQ. ${err.message}` );
              channel = undefined;
          }

          try {

              await channel.bindQueue( conf.rabbitPublishQueueName, conf.rabbitTopicName, conf.rabbitPublishRoutingKey );

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
    
                    let myJSON = JSON.stringify(push_Mensage);
    
                    channel.publish(conf.rabbitPublishQueueName, conf.rabbitTopicName, Buffer.from(myJSON));
                  } catch (e) {
                    console.log('erro ao enviar dados ' + e);
                    throw new Error('abortado!');
                  }
    
                  inicio = fim;
                  fim + base < tamanho ? (fim += base) : (fim = tamanho);
                }
              }
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao configurar a chave de roteamento. ${err.message}` );
              channel = undefined;
          }         

           
    
      }
  }
  return channel;
}