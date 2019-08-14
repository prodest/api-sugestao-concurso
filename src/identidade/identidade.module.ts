import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ConcursoModule } from './concurso/concurso.module';
import { PessoaModule } from './pessoa/pessoa.module';

@Module({
  imports: [CoreModule, ConcursoModule, PessoaModule],
})
export class IdentidadeModule {}
