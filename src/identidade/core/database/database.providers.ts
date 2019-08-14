import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME || 'identidade_cidada_new',
        schema: 'public',
        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: true,
      }),
  },
  {
    provide: 'DbConnectionSugestaoToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME_2 || 'base_sugestao',
        schema: 'public',
        entities: [__dirname + '/../entities_sugestao/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: false,
      }),
  },
];
