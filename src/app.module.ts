import { Module } from '@nestjs/common';
import { SugestaoModule } from './sugestao/sugestao.module';

@Module({
  imports: [SugestaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
