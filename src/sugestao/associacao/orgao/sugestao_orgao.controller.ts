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
import { PublishQueue } from '../../rabbitmq/publish';
//import { writeFile } from 'fs';
@ApiUseTags('sugestao')
@Controller('sugestao')
export class SugestaoOrgaoController {
  constructor(
    private readonly sender: sender,
    private readonly sugestaoOrgaoService: SugestaoOrgaoService,
    private readonly respostaSugestaoDados: RespostaSugestaoDados,
    private readonly publishQueue: PublishQueue,
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
    let message = { mensagem: 'Publicado' };

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

        console.log(resposta_consulta.cpf_candidatos.length);
        this.publishQueue.publish(resposta_consulta);
        res.status(HttpStatus.OK).send(message);
      } else {
        console.log('concurso não existe!');
      }
    } catch (e) {
      console.log(e);
    }
  }
}
