import { Document } from 'mongoose';

export interface SugestaoOrgao extends Document {
  readonly orgao_destino: string;
  readonly porcentagem: number;
  readonly orgao_origem: Array<string>;
}
