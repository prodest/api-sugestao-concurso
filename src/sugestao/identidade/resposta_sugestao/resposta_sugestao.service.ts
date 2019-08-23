import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../entities/pessoa.entity';

@Injectable()
export class RespostaSugestaoService {
  constructor(
    @Inject('IdentidadeConnectionToken')
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async findAllCandidates(orgao: string): Promise<any> {
    return await Pessoa.createQueryBuilder('pessoa')
      .select('pessoa.numerocpf')
      .innerJoin('pessoa.inscricao', 'inscricao')
      .innerJoin('inscricao.concurso', 'concurso')
      .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
      .where('lower(orgaoconcurso.nome) LIKE :nome', { nome: `${orgao}%` })
      .getRawMany();
  }
}
