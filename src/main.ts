import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [
  //       `amqp://fpgktngg:6-Sq5YfaHEXjydofFJ86gp1mogR282Qz@barnacle.rmq.cloudamqp.com/fpgktngg`,
  //     ],
  //     queue: 'fila',
  //     queueOptions: { durable: false },
  //   },
  // });

  const options = new DocumentBuilder()
    .setTitle('Api - Push Sugestão')
    .setVersion('1.0')
    .addTag('push_sugestao')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
