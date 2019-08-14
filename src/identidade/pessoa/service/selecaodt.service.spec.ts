import { Repository } from 'typeorm';
import { Pessoa } from '../../core/entities/pessoa.entity';
import { SelecaodtService } from './selecaodt.service';
import { PessoaDto } from '../dto/pessoa.dto';
import { GenericPessoaService } from './generic-pessoa.service';

jest.mock('../service/generic-pessoa.service');

describe('SelecaodtService', () => {
  let database: GenericPessoaService;
  let pessoa: Repository<Pessoa>;
  let service: SelecaodtService;

  beforeEach(() => {
    database = new GenericPessoaService(pessoa);
    service = new SelecaodtService(database);
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
