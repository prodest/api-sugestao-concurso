import { Module } from '@nestjs/common';
import { SugestaoController } from './controller/sugestao.controller';
import { CoreModule } from '../core/core.module';
import { SugestaoBaseService } from './service/generic-pessoa.service';
import { SugestaoService } from './service/sugestao.service';
import { pessoaProviders } from './service/pessoa.providers';
import { officeProviders } from './service/habilidades.providers';

@Module({
  imports: [CoreModule],
  controllers: [SugestaoController],
  providers: [
    SugestaoBaseService,
    SugestaoService,
    ...pessoaProviders,
    ...officeProviders,
  ],
})
export class PessoaModule {}
