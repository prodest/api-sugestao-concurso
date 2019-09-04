import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Pessoa } from './pessoa.entity';
@Entity()
export class Deficiencia extends Auditoria {
  @Column({ type: 'varchar' })
  @Index('descricao_index')
  descricao: string;
}
