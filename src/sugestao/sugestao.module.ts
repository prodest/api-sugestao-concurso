import { Module } from '@nestjs/common';

import { SugestaoOrgaoModule } from './associacao/orgao/sugestao_orgao.module';
import { AssociacaoModule } from './associacao/associacao.module';
import { IdentidadeModule } from './identidade/identidade.module';

@Module({
  imports: [SugestaoOrgaoModule, AssociacaoModule, IdentidadeModule],
})
export class SugestaoModule {}
