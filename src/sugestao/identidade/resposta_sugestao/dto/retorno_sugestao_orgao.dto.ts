export class RetornoSugestaoOrgaoDto {
  porcentagem: number;
  orgao_origem: string;
  cpf_candidatos: Array<string>;

  constructor(
    porcentagem: number,
    orgao_origem: string,
    cpf_candidatos: Array<string>,
  ) {
    this.porcentagem = porcentagem;
    this.orgao_origem = orgao_origem;
    this.cpf_candidatos = cpf_candidatos;
  }
}
