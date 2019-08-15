import { Module } from '@nestjs/common';
import { SugestaoOrgaoModule } from './orgao/sugestao_orgao.module';

@Module({
  imports: [SugestaoOrgaoModule],
  controllers: [],
  providers: [],
})
export class AssociacaoModule {}
