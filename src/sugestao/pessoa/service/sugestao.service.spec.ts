import { Repository } from 'typeorm';
import { Pessoa } from '../../identidade/entities/pessoa.entity';
import { SugestaoService } from './sugestao.service';
import { PessoaDto } from '../dto/pessoa.dto';
import { SugestaoBaseService } from './generic-pessoa.service';

jest.mock('../service/generic-pessoa.service');

describe('SugestaoService', () => {
  let database: SugestaoBaseService;
  let pessoa: Repository<Pessoa>;
  let service: SugestaoService;

  beforeEach(() => {
    database = new SugestaoBaseService(pessoa);
    service = new SugestaoService(database);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Ao chamar returnPeopleByOffice ela retornará um array de candidatos por habilidade', async () => {
    let retorno: PessoaDto[] = await service.returnPeopleByOffice([
      'Programador',
    ]);
    expect(retorno).toEqual([
      { cargo: 'Programador', arrayCpf: ['12345678912'] },
    ]);
  });

  it('Ao chamar returnArrayCPF ela retornará um array dos cpf', async () => {
    let pessoas = [{ numerocpf: '12345678912' }, { numerocpf: '12332112323' }];
    let retorno: string[] = service.returnArrayCPF(pessoas);
    expect(retorno).toBeInstanceOf(Array);
  });
});
