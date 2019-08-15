import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../../identidade/entities/pessoa.entity';

@Injectable()
export class SugestaoBaseService {
  constructor(
    @Inject('PessoaRepositoryToken')
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async findByOfficeName(cargo: string): Promise<Array<{ numerocpf: string }>> {
    return await this.pessoaRepository
      .createQueryBuilder('pessoa')
      .select('numeroCPF')
      .innerJoin('pessoa.habilidade', 'habilidade')
      .where('habilidade.descricao like :nome', { nome: cargo })
      .getRawMany();
  }

  async buscaOrgaos(orgao: string) {
    return await Sugestao.find({ orgao_destino: orgao });
  }
}
