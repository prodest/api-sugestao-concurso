import { Controller, Post, Body } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { SugestaoService } from '../service/sugestao.service';
import { PessoaDto } from '../dto/pessoa.dto';

@ApiUseTags('sugestao')
@Controller('')
export class SugestaoController {
  constructor(private readonly sugestaoService: SugestaoService) {}

  //Rota que retorna o dic de candidatos, dado um array de cargos
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  // @Post('/buscarCandidatos')
  // async arrayCandidatesByOffice(@Body() body): Promise<PessoaDto[] | string> {
  //   console.log('arrayCandidatos', body);
  //   //return 'a';
  //   return this.SugestaoService.returnPeopleByOffice(body.cargos);
  // }
  @Post('/candidatos')
  async arrayCandidatosPorOrgao(@Body() body): Promise<PessoaDto[] | string> {
    // console.log('bla', body);
    //return 'Entrou';
    console.log(await this.sugestaoService.retornaOrgaosSimilares(body.orgao));
    return 'a';
  }
}
