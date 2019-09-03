import { Module, MiddlewareConsumer } from '@nestjs/common';
import { SugestaoModule } from './sugestao/sugestao.module';
import { LoggerMiddleware } from './sugestao/middleware/logger.middleware';
import { SugestaoOrgaoController } from './sugestao/associacao/orgao/sugestao_orgao.controller';
import { AmqpModule } from 'nestjs-amqp';

@Module({
  imports: [
    SugestaoModule,
    AmqpModule.forRoot({
      name: 'rabbitmq',
      hostname: 'barnacle.rmq.cloudamqp.com',
      port: 1883,
      username: 'fpgktngg',
      password: 'Sq5YfaHEXjydofFJ86gp1mogR282Qz',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SugestaoOrgaoController);
  }
}
