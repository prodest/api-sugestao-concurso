import { Module } from '@nestjs/common';
import { SugestaoController } from './sugestao.controller';
import { SugestaoService } from './sugestao.service';
import { sugestaoProviders } from './sugestao.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [SugestaoController],
  providers: [SugestaoService, ...sugestaoProviders],
})

export class SugestaoModule {}
