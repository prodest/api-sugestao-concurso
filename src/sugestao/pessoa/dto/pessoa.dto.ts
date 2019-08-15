import { ApiModelProperty } from '@nestjs/swagger';

export class PessoaDto {
  @ApiModelProperty()
  orgao: string;

  @ApiModelProperty()
  arrayCpf: string[];

  constructor(orgao: string, arrayCpf: string[]) {
    this.orgao = orgao;
    this.arrayCpf = arrayCpf;
  }
}
