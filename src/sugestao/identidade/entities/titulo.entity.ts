import { Entity, Column, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';

export class Titulo extends Auditoria {
  @Column({ type: 'varchar' })
  @Index('TituloDescricao_index')
  descricao: string;
}
