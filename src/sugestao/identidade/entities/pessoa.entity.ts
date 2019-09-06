import {
  Entity,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';

@Entity()
export class Pessoa extends Auditoria {
  @Column({ name: 'guidacessocidadao', nullable: true})
  guidAcessoCidadao: string;

  @Column({ type: 'varchar', length: 250 })
  nome: string;

  @Column({ name: 'datanascimento', type: 'date' })
  dataNascimento: Date;

  @Column({ name: 'nomepai', type: 'varchar', length: 250 })
  nomePai: string;

  @Column({ name: 'nomemae', type: 'varchar', length: 250 })
  nomeMae: string;

  @Column({ name: 'numerocpf', type: 'varchar', length: 20 })
  @Index('numerocpf_index')
  numeroCPF: string;

  @Column({ type: 'varchar', length: 10 })
  sexo: string;

  @Column({ name: 'possuideficiencia' })
  possuiDeficiencia: boolean;

  @OneToMany(type => Inscricao, inscricao => inscricao.pessoa)
  inscricao: Inscricao[];

}
