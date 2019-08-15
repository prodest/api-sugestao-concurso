import { Module } from '@nestjs/common';
import { RespostaSugestaoService } from './resposta_sugestao.service';
import { RespostaSugestaoDados } from './resposta_sugestao_dados';
import { databaseProviders } from '../database/identidade_database.providers';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ...databaseProviders,
    RespostaSugestaoService,
    RespostaSugestaoDados,
  ],
  exports: [RespostaSugestaoService, RespostaSugestaoDados],
})
export class RespostaSugestaoModule {}
