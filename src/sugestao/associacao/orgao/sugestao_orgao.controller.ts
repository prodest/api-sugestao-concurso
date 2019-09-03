import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { SugestaoOrgaoService } from './sugestao_orgao.service';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { RespostaSugestaoDados } from '../../identidade/resposta_sugestao/resposta_sugestao_dados';
import { RetornoSugestaoOrgaoDto } from './../../identidade/resposta_sugestao/dto/retorno_sugestao_orgao.dto';
import { sender } from './sender.service';
import { PublicaFila } from './publica.service';
//import { writeFile } from 'fs';
@ApiUseTags('sugestao')
@Controller('sugestao')
export class SugestaoOrgaoController {
  constructor(
    private readonly sender: sender,
    private readonly sugestaoOrgaoService: SugestaoOrgaoService,
    private readonly respostaSugestaoDados: RespostaSugestaoDados,
    private readonly publicaFila: PublicaFila,
  ) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Map was find.' })
  @ApiResponse({ status: 404, description: 'Map was not find.' })
  @ApiResponse({ status: 503, description: 'Server error.' })
  async findAll(@Res() res) {
    try {
      let result = await this.sugestaoOrgaoService.findAll();
      if (result != null) {
        res.status(HttpStatus.OK).send(result);
      } else {
        res.status(HttpStatus.NOT_FOUND).json('{"message":"Erro ao buscar"}');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).json(err.message);
    }
  }

  @Get(':orgao')
  async find(@Res() res, @Param() params) {
    let resposta_consulta: RetornoSugestaoOrgaoDto;
    try {
      let result = await this.sugestaoOrgaoService.find(params.orgao);

      if (result.length == 0) {
        res.status(HttpStatus.OK).send('Orgão sem correlação');
      } else if (result != null) {
        resposta_consulta = await this.respostaSugestaoDados.retornaArraySugestao(
          result,
        );
        res.status(HttpStatus.OK).send(resposta_consulta);
        return resposta_consulta;
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json('{"message":"Erro ao buscar o orgao"}');
        return [];
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).json(err.message);
    }
  }
  @Post()
  async trigger(@Body() body, @Res() res) {
    let message = { mensagem: 'ok' };
    res.status(HttpStatus.OK).send(message);
    let resposta_consulta: RetornoSugestaoOrgaoDto;
    try {
      let result = await this.sugestaoOrgaoService.find(body.orgao);

      if (result.length == 0) {
        throw new Error('Nenhum orgão com este nome foi encontrado');
      }
      if (result != null) {
        resposta_consulta = await this.respostaSugestaoDados.retornaArraySugestao(
          result,
        );
      } else {
        console.log('concurso não existe!');
      }
    } catch (e) {
      console.log(e);
    }
    // try {
    // this.publicaFila.publica(
    //   'amqp://fpgktngg:6-Sq5YfaHEXjydofFJ86gp1mogR282Qz@barnacle.rmq.cloudamqp.com/fpgktngg',
    // );
    //   /*let resposta: any = await this.sender.envia_dados(
    //     process.env.URL_PUSH || 'http://10.32.32.60:3000/push',
    //     resposta_consulta,)}*/
    //   this.fila(resposta_consulta);
    //   // writeFile('./log.json', JSON.stringify(resposta), error => {
    //   //   if (error) console.error(error);
    //   //   else console.log('file created successfully!');
    //   // });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  async fila(dado: RetornoSugestaoOrgaoDto) {
    const base = 1000;
    let inicio = 0;
    let fim = base;
    let tamanho = dado.cpf_candidatos.length;
    let lista_cpf;
    while (inicio != fim) {
      lista_cpf = dado.cpf_candidatos.slice(inicio, fim);
      let push_Mensage = {
        users: lista_cpf,
        title: dado.titulo,
        message: dado.mensagem,
      };
      try {
        let resposta: any = await this.sender.envia_dados(
          process.env.URL_PUSH || 'http://10.32.32.60:3000/push/validate',
          push_Mensage,
        );
        console.log('estado', `de ${inicio} a ${fim} total ${tamanho}`);
        console.log('Response push notification: ', resposta);
      } catch (e) {
        console.log('erro ao enviar dados ' + e);
        throw new Error('abortado!');
      }

      inicio = fim;
      fim + base < tamanho ? (fim += base) : (fim = tamanho);
    }
  }
}
