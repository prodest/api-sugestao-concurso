import { Entity, Column, OneToMany, ManyToOne, JoinTable, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Cargo } from './cargo.entity';
import { Pessoa } from './pessoa.entity';
import { Concurso } from './concurso.entity';

@Entity()
export class Inscricao extends Auditoria {
  @Column({ type: "timestamp" })
  datainscricao: Date;
/*
  @OneToMany(type => Cargo, cargo => cargo.id)
  cago: Cargo
*/
  @ManyToOne(type => Pessoa, pessoa => pessoa.id)
  @JoinColumn({ name: "pessoaid" })
  @Index("pessoaid_index")
  pessoa: Pessoa[]

  @ManyToOne(type => Concurso, concurso => concurso.id)
  @JoinColumn({ name: "concursoid" })
  @Index("concrusoid_index")
  concurso: Concurso[]

}
