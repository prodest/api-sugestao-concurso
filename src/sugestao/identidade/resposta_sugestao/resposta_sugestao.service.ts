import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../entities/pessoa.entity';
import { Inscricao } from '../entities/inscricao.entity';

@Injectable()
export class RespostaSugestaoService {
  constructor(
    @Inject('IdentidadeConnectionToken')
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async findAllCandidates(orgao: string): Promise<any> {
    console.log(orgao);
    try {
      let a = await Inscricao.find({
        join: {
          alias: 'inscricao',
          leftJoin: {
            pessoa: 'inscricao.pessoa',
          },
        },
      });

      // createQueryBuilder('pessoa')
      //   .select('pessoa.numerocpf')
      //   .innerJoin('pessoa.inscricoes', 'inscricao')
      //   .innerJoin('inscricao.concurso', 'concurso')
      //   .innerJoin('concurso.OrgaoConcurso', 'orgaoconcurso')
      //   .where('lower(orgaoconcurso.nome) LIKE :nome', { nome: `${orgao}%` })
      //   .getRawMany();

      console.log(a);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
