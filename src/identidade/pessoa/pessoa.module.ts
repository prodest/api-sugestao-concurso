import { Module } from '@nestjs/common';
import { SelecaodtController } from './controller/selecaodt.controller';
import { CoreModule } from '../core/core.module';
import { GenericPessoaService } from './service/generic-pessoa.service';
import { SelecaodtService } from './service/selecaodt.service';
import { pessoaProviders } from './service/pessoa.providers';
import { officeProviders } from './service/habilidades.providers';

@Module({
  imports: [CoreModule],
  controllers: [SelecaodtController],
  providers: [
    GenericPessoaService,
    SelecaodtService,
    ...pessoaProviders,
    ...officeProviders,
  ],
})
export class PessoaModule {}
