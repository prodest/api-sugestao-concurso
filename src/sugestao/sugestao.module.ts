import { Module, HttpModule } from '@nestjs/common';

import { SugestaoOrgaoModule } from './associacao/orgao/sugestao_orgao.module';
import { AssociacaoModule } from './associacao/associacao.module';
import { IdentidadeModule } from './identidade/identidade.module';

@Module({
  imports: [
    SugestaoOrgaoModule,
    AssociacaoModule,
    IdentidadeModule,
    HttpModule,
  ],
})
export class SugestaoModule {}
