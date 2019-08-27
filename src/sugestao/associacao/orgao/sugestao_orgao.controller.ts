import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { SugestaoOrgaoService } from './sugestao_orgao.service';

import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { RespostaSugestaoDados } from '../../identidade/resposta_sugestao/resposta_sugestao_dados';
import { RetornoSugestaoOrgaoDto } from './../../identidade/resposta_sugestao/dto/retorno_sugestao_orgao.dto';
import { get } from 'http';

@ApiUseTags('sugestao')
@Controller('sugestao')
export class SugestaoOrgaoController {
  constructor(
    private readonly sugestaoOrgaoService: SugestaoOrgaoService,
    private readonly respostaSugestaoDados: RespostaSugestaoDados,
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
    let resposta_consulta: Array<RetornoSugestaoOrgaoDto>;
    try {
      let result = await this.sugestaoOrgaoService.find(params.orgao);

      if (result != null) {
        resposta_consulta = await this.respostaSugestaoDados.retornaArraySugestao(
          result,
        );

        res.status(HttpStatus.OK).send(resposta_consulta);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json('{"message":"Erro ao buscar o orgao"}');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).json(err.message);
    }
  }
}
