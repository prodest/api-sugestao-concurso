import * as mongoose from 'mongoose';

export const sugestaoOrgaoSchema = new mongoose.Schema({
  orgao_destino: {
    type: String,
    required: true,
  },
  porcentagem: {
    type: Number,
    required: true,
  },
  orgao_origem: {
    type: String,
    required: true,
  },
});
