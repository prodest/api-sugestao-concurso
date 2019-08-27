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

    let dic: {} = [];
    let mensagem: string;
    let orgao_destino: string = orgaos[0].orgao_destino;

    for (let j = 0; j < orgaos.length; j++) {
      for (let i = 0; i < orgaos[j].orgao_origem.length; i++) {
        dic[orgaos[j].orgao_origem[i]] = orgaos[j].porcentagem;
      }
    }

    for (const elem in dic) {
      retorno = await this.returnArrayCPF(
        await this.respostaSugestaoService.findAllCandidates(elem),
      );

      mensagem =
        'Oi, tenho ' +
        dic[elem].toFixed(2) +
        '% de certeza que você vai se interessar pelo processo seletivo ' +
        orgao_destino.toUpperCase() +
        '.';

      const arrayResposta = new RetornoSugestaoOrgaoDto(
        mensagem,
        retorno,
        'ESPM NEWS',
      );

      resposta.push(arrayResposta);
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
