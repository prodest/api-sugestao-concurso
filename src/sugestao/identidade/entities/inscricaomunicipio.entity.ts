import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Municipio } from './municipio.entity';
import { Inscricao } from './inscricao.entity';
@Entity()
export class Inscricao_municipio extends Auditoria {
  @ManyToOne(type => Municipio, municipio => municipio.id)
  @JoinColumn({ name: 'municipioid' })
  @Index('municipioid_incricao_municipio_index')
  municipio: Municipio;

  @OneToOne(type => Inscricao, inscricao => inscricao.id)
  @JoinColumn({ name: 'inscricaoid' })
  @Index('inscricaoid_incricao_municipio_index')
  inscricao: Inscricao;
}
