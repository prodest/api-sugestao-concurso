import { Module } from '@nestjs/common';
import { databaseProviders } from './mongo_database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class MongoDatabaseModule {}
