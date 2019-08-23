import { ApiModelProperty } from '@nestjs/swagger';

export class SugestoOrgaoDto {
  readonly orgao_destino: string;
  readonly porcentagem: number;
  readonly orgao_origem: Array<string>;
}
