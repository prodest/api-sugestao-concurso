import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'IdentidadeConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mssql',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 1433,
        username: process.env.DB_USERNAME || 'espm_local',
        password: process.env.DB_PASSWORD || '123',
        database: process.env.DB_NAME || 'identidade_cidada',
        schema: 'dbo',
        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: false,
      }),
  },
];
