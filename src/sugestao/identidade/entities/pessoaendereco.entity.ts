import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Endereco } from './endereco.entity';

@Entity()
export class Pessoa_endereco extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'timestamp' })
  data: Date;

  @ManyToOne(type => Pessoa, pessoa => pessoa.id)
  @JoinColumn({ name: 'pessoaid' })
  @Index('pessoaid_pessoa_endereco_index')
  municipio: Pessoa;

  @ManyToOne(type => Endereco, endereco => endereco.id)
  @JoinColumn({ name: 'enderecoid' })
  @Index('enderecoid_pessoa_endereco_index')
  endereco: Endereco;
}
