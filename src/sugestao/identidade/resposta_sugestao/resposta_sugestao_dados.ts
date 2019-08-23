import { RespostaSugestaoService } from './resposta_sugestao.service';
import { Injectable } from '@nestjs/common';
import { RetornoSugestaoOrgaoDto } from './dto/retorno_sugestao_orgao.dto';

@Injectable()
export class RespostaSugestaoDados {
  constructor(
    private readonly respostaSugestaoService: RespostaSugestaoService,
  ) {}

  async retornaArraySugestao(
    orgaos: Array<any>,
  ): Promise<RetornoSugestaoOrgaoDto[]> {
    let retorno: any;
    let resposta: RetornoSugestaoOrgaoDto[] = new Array<
      RetornoSugestaoOrgaoDto
    >();

    let porcentagem = orgaos[0].porcentagem;
    for (let j = 0; j < orgaos.length; j++) {
      for (let i = 0; i < orgaos[j].orgao_origem.length; i++) {
        retorno = await this.returnArrayCPF(
          await this.respostaSugestaoService.findAllCandidates(
            orgaos[i].orgao_origem,
          ),
        );
        const personDto = new RetornoSugestaoOrgaoDto(
          porcentagem,
          orgaos[i].orgao_origem,
          retorno,
        );
        resposta.push(personDto);
      }
    }
    return resposta;
  }

  returnArrayCPF(candidatos: { numerocpf: string }[]) {
    let arrayCPF: string[] = new Array<string>();
    for (let i = 0; i < candidatos.length; i++) {
      arrayCPF.push(candidatos[i].numerocpf);
    }
    return arrayCPF;
  }
}
