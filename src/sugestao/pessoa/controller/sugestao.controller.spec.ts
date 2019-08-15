import { SugestaoController } from './sugestao.controller';
import { Repository } from 'typeorm';
import { Pessoa } from '../../identidade/entities/pessoa.entity';
import { SugestaoService } from '../service/sugestao.service';
import { SugestaoBaseService } from '../service/generic-pessoa.service';
import { PessoaDto } from '../dto/pessoa.dto';

jest.mock('../service/generic-pessoa.service');

describe('Selecaodt Controller', () => {
  let database: SugestaoBaseService;
  let pessoa: Repository<Pessoa>;
  let service: SugestaoService;
  let controller: SugestaoController;

  beforeEach(() => {
    database = new SugestaoBaseService(pessoa);
    service = new SugestaoService(database);
    controller = new SugestaoController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Ao chamar arrayCandidatesByOffice ela retornará um json de candidatos por habilidade', async () => {
    let retorno: PessoaDto[] = await controller.arrayCandidatesByOffice({
      cargos: ['Programador'],
    });

    expect(retorno).toEqual([
      { cargo: 'Programador', arrayCpf: ['12345678912'] },
    ]);
  });
});
