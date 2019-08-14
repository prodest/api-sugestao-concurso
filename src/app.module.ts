import { Module } from '@nestjs/common';
import { IdentidadeModule } from './identidade/identidade.module';

@Module({
  imports: [IdentidadeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
