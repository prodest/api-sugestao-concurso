import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Auditoria } from './Auditoria.entity';

export class Escolaridade extends Auditoria {
  @Column({ type: 'varchar', length: 100 })
  descricao: string;
}
