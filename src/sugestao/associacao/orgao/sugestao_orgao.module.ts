import { Module } from '@nestjs/common';
import { sugestaoOrgaoProviders } from './sugestao_orgao.provider';
import { SugestaoOrgaoController } from './sugestao_orgao.controller';
import { MongoDatabaseModule } from '../database/mongo_database.module';
import { SugestaoOrgaoService } from './sugestao_orgao.service';
import { RespostaSugestaoModule } from '../../identidade/resposta_sugestao/resposta_sugestao.module';

@Module({
  imports: [MongoDatabaseModule, RespostaSugestaoModule],
  controllers: [SugestaoOrgaoController],
  providers: [...sugestaoOrgaoProviders, SugestaoOrgaoService],
  exports: [...sugestaoOrgaoProviders, SugestaoOrgaoService],
})
export class SugestaoOrgaoModule {}
