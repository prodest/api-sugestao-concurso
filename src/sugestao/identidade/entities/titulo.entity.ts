import { Entity, Column, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
@Entity()
export class Titulo extends Auditoria {
  @Column({ type: 'varchar', nullable: true })
  @Index('TituloDescricao_index')
  descricao: string;
}
