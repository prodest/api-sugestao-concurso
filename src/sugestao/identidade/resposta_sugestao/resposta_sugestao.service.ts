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

  async findAllCandidatesNoContained(dic): Promise<any> {
    let tamanhoDic = Object.keys(dic).length;
    let valores = Object.keys(dic);
    console.log(tamanhoDic);
    if (tamanhoDic == 1) {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf, orgaoconcurso.nome')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where('not (lower(orgaoconcurso.nome) LIKE :nome1)', {
          nome: valores[0],
        })
        .getRawMany();
    } else if (tamanhoDic == 2) {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf, orgaoconcurso.nome')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where(
          'not (lower(orgaoconcurso.nome) LIKE :nome or lower(orgaoconcurso.nome) LIKE :nome1)',
          { nome: valores[0], nome1: valores[1] },
        )
        .getRawMany();
    } else if (tamanhoDic == 3) {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf, orgaoconcurso.nome')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where(
          'not (lower(orgaoconcurso.nome) LIKE :nome or lower(orgaoconcurso.nome) LIKE :nome1 or lower(orgaoconcurso.nome) LIKE :nome2)',
          { nome: valores[0], nome1: valores[1], nome2: valores[1] },
        )
        .getRawMany();
    } else if (tamanhoDic == 4) {
      return await Pessoa.createQueryBuilder('pessoa')
        .select('pessoa.numerocpf, orgaoconcurso.nome')
        .innerJoin('pessoa.inscricao', 'inscricao')
        .innerJoin('inscricao.concurso', 'concurso')
        .innerJoin('concurso.orgaoConcurso', 'orgaoconcurso')
        .where(
          'not (lower(orgaoconcurso.nome) LIKE :nome or lower(orgaoconcurso.nome) LIKE :nome1 or lower(orgaoconcurso.nome) LIKE :nome2 or lower(orgaoconcurso.nome) LIKE :nome3)',
          {
            nome: valores[0],
            nome1: valores[1],
            nome2: valores[2],
            nome3: valores[3],
          },
        )
        .getRawMany();
    }
  }
}
