import { Module, MiddlewareConsumer } from '@nestjs/common';
import { SugestaoModule } from './sugestao/sugestao.module';
import { LoggerMiddleware } from './sugestao/middleware/logger.middleware';
import { SugestaoOrgaoController } from './sugestao/associacao/orgao/sugestao_orgao.controller';

@Module({
  imports: [SugestaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SugestaoOrgaoController);
  }
}
