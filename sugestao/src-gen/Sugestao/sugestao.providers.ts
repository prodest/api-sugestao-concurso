import { Connection, Repository } from 'typeorm';
import { Sugestao } from './sugestao.entity'

export const sugestaoProviders = [
	{
		provide: 'SUGESTAO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Sugestao),
		inject: ['DATABASE_CONNECTION'],
	}
];
