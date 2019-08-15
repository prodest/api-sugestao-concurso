import { Repository } from 'typeorm';
import { SugestaoBaseService } from './generic-pessoa.service';
import { Pessoa } from '../../identidade/entities/pessoa.entity';

jest.mock('./generic-pessoa.service');

describe('SugestaoBaseService', () => {
  let database: SugestaoBaseService;
  let pessoa: Repository<Pessoa>;

  beforeEach(async () => {
    database = new SugestaoBaseService(pessoa);
  });

  it('Ao chamar findByOfficeName ela retornará o numero do cpf do candidatos dado a sua habilidade', async () => {
    let cargo: string = 'Programador';
    let retorno: { numerocpf: string }[] = await database.findByOfficeName(
      cargo,
    );
    expect(retorno).toEqual([{ numerocpf: '12345678912' }]);
  });
});
