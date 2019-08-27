export class RetornoSugestaoOrgaoDto {
  mensagem: string;
  cpf_candidatos: Array<string>;
  titulo: string;

  constructor(mensagem: string, cpf_candidatos: Array<string>, titulo: string) {
    this.mensagem = mensagem;
    this.cpf_candidatos = cpf_candidatos;
    this.titulo = titulo;
  }
}
