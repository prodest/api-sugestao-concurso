import { SelecaodtController } from './selecaodt.controller';
import { Repository } from 'typeorm';
import { Pessoa } from '../../core/entities/pessoa.entity';
import { SelecaodtService } from '../service/selecaodt.service';
import { GenericPessoaService } from '../service/generic-pessoa.service';
import { PessoaDto } from '../dto/pessoa.dto';

jest.mock('../service/generic-pessoa.service');

describe('Selecaodt Controller', () => {
  let database: GenericPessoaService;
  let pessoa: Repository<Pessoa>;
  let service: SelecaodtService;
  let controller: SelecaodtController;

  beforeEach(() => {
    database = new GenericPessoaService(pessoa);
    service = new SelecaodtService(database);
    controller = new SelecaodtController(service);
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
