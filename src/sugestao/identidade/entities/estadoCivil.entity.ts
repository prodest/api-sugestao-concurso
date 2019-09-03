import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';

export class EstadoCivil extends Auditoria {
  @Column({ type: 'varchar', length: 100 })
  descricao: string;
}
