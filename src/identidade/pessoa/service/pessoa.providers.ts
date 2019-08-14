import { Connection } from 'typeorm';
import { Pessoa } from '../../core/entities/pessoa.entity';

export const pessoaProviders = [
  {
    provide: 'PessoaRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Pessoa),
    inject: ['DbConnectionToken'],
  },
];
