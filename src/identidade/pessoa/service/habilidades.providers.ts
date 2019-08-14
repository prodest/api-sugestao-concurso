import { Connection } from 'typeorm';
import { Habilidade } from '../../core/entities/habilidade.entity';

export const officeProviders = [
  {
    provide: 'OfficeRepositoryToken',
    useFactory: (connection: Connection) =>
      connection.getRepository(Habilidade),
    inject: ['DbConnectionToken', 'DbConnectionSugestaoToken'],
  },
];
