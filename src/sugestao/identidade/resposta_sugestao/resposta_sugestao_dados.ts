import { RespostaSugestaoService } from './resposta_sugestao.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RespostaSugestaoDados {
  constructor(
    private readonly respostaSugestaoService: RespostaSugestaoService,
  ) {}

  retornaArraySugestao(orgaos: Array<any>) {
    let retorno;

    orgaos.forEach(async orgao => {
      retorno = await this.respostaSugestaoService.findAllCandidates(
        orgao.orgao_origem,
      );
    });
  }
}
