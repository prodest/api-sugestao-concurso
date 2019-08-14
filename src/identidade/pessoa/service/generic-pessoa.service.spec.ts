import { Repository } from 'typeorm';
import { GenericPessoaService } from './generic-pessoa.service';
import { Pessoa } from '../../core/entities/pessoa.entity';

jest.mock('./generic-pessoa.service');

describe('GenericPessoaService', () => {
  let database: GenericPessoaService;
  let pessoa: Repository<Pessoa>;

  beforeEach(async () => {
    database = new GenericPessoaService(pessoa);
  });

  it('Ao chamar findByOfficeName ela retornará o numero do cpf do candidatos dado a sua habilidade', async () => {
    let cargo: string = 'Programador';
    let retorno: { numerocpf: string }[] = await database.findByOfficeName(
      cargo,
    );
    expect(retorno).toEqual([{ numerocpf: '12345678912' }]);
  });
});
