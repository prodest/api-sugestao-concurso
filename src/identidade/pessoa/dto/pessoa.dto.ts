import { ApiModelProperty } from '@nestjs/swagger';

export class PessoaDto {
  @ApiModelProperty()
  cargo: string;

  @ApiModelProperty()
  arrayCpf: string[];

  constructor(cargo: string, arrayCpf: string[]) {
    this.cargo = cargo;
    this.arrayCpf = arrayCpf;
  }
}
