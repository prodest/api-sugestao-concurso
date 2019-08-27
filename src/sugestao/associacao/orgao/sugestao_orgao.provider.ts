import { Connection } from 'mongoose';
import { sugestaoOrgaoSchema } from './schemas/sugestao_orgao.schema';

export const sugestaoOrgaoProviders = [
  {
    provide: 'sugestaoOrgaoConnectionToken',
    useFactory: (connection: Connection) =>
      connection.model('sugestaoorgaos', sugestaoOrgaoSchema),
    inject: ['MongoConnectionToken'],
  },
];
