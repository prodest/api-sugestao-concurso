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
    if (orgao != 'outros') {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where('lower(orgaoconcurso.nome) LIKE :nome', { nome: `${orgao}%` })
        .getRawMany();
    } else {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf, orgaoconcurso.nome')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where(
          'not (lower(orgaoconcurso.nome) LIKE :nome1 or lower(orgaoconcurso.nome) LIKE :nome2 or lower(orgaoconcurso.nome) LIKE :nome3 or lower(orgaoconcurso.nome) LIKE :nome4)',
          { nome1: 'SEJUS', nome2: 'IASES', nome3: 'SESA', nome4: 'SEDU' },
        )
        .getRawMany();
    }
  }

  async findAllCandidatesNoContained(dic): Promise<any> {}
}
