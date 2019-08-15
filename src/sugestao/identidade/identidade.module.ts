import { Module } from '@nestjs/common';
import { RespostaSugestaoModule } from './resposta_sugestao/resposta_sugestao.module';

@Module({
  imports: [RespostaSugestaoModule],
  controllers: [],
  providers: [],
})
export class IdentidadeModule {}
