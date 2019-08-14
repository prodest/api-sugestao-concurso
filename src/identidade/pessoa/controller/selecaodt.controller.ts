import { Controller, Post, Body } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { SelecaodtService } from '../service/selecaodt.service';
import { PessoaDto } from '../dto/pessoa.dto';

@ApiUseTags('selecaodt')
@Controller('')
export class SelecaodtController {
  constructor(private readonly selecaodtService: SelecaodtService) {}

  //Rota que retorna o dic de candidatos, dado um array de cargos
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('/buscarCandidatos')
  async arrayCandidatesByOffice(@Body() body): Promise<PessoaDto[]> {
    return this.selecaodtService.returnPeopleByOffice(body.cargos);
  }
}
