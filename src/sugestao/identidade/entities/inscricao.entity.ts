import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Area } from './area.entity';
import { Pessoa } from './pessoa.entity';
import { Concurso } from './concurso.entity';
import { Classificacao } from './classificacao.entity';

@Entity()
export class Inscricao extends Auditoria {
  @Column({ type: 'datetime' })
  datainscricao: Date;

  /*
  @OneToMany(type => Cargo, cargo => cargo.id)
  cago: Cargo
*/

  @ManyToOne(type => Pessoa, pessoa => pessoa.inscricao)
  @JoinColumn({ name: 'pessoaid' })
  @Index('pessoaid_index')
  pessoa: Pessoa;

  @ManyToOne(type => Concurso, concurso => concurso.orgaoConcurso)
  @JoinColumn({ name: 'concursoid' })
  @Index('concrusoid_index')
  concurso: Concurso;

  /*
  @ManyToOne(type => Area, areas => areas.id)
  @JoinColumn({ name: "areaid" })
  @Index("areaid_index")
  areas: Area[]
*/

  @ManyToOne(type => Classificacao, classificacoes => classificacoes.id)
  @JoinColumn({ name: 'classificacaoid' })
  @Index('classificacaoid_index')
  classificacoes: Classificacao[];
}
