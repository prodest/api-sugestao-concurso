import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Estado } from './estado.entity';
import { Inscricao_municipio } from './inscricaomunicipio.entity';

export class Municipio extends Auditoria {
  @Column({ type: 'varchar' })
  nome: string;

  @ManyToOne(type => Estado, estado => estado.id)
  @JoinColumn({ name: 'estadoid' })
  @Index('estadoid_endereco_index')
  estado: Estado;

  @OneToMany(
    type => Inscricao_municipio,
    inscricao_municipio => inscricao_municipio.id,
  )
  inscricao_municipio: Inscricao_municipio[];
}
