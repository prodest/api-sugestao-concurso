import { Module } from '@nestjs/common';
import { databaseProviders } from './identidade_database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class IdentidadeDatabaseModule {}
