import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  Index,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';
import { OrgaoConcurso } from './orgaoConcurso.entity';
import { Habilidade } from './habilidade.entity';

@Entity()
export class Concurso extends Auditoria {
  @Column({ type: 'varchar', length: 1000, nullable: true })
  nome: string;

  @Column({ type: 'varchar', length: 3000 })
  descricao: string;

  @Column({ type: 'int' })
  acessos: number;

  @Column({ type: 'date', nullable: true })
  datainiciodivulgacao: Date;

  @Column({ type: 'date', nullable: true })
  datainicioinscricao: Date;

  @Column({ type: 'date', nullable: true })
  datafiminscricao: Date;

  @Column({ type: 'time', nullable: true })
  horainicioinscricao: Date;

  @Column({ type: 'time', nullable: true })
  horafiminscricao: Date;

  @Column({ type: 'date', nullable: true })
  datafimvigencia: Date;

  @Column({ type: 'bit' })
  liberarvisualizacao: boolean;

  @Column({ type: 'bit' })
  etapaprova: boolean;

  @Column({ type: 'int' })
  @Index('idbancoorigem_index')
  idbancoorigem: number;

  /*
  @OneToMany(type => Area, areas => areas.id)
  areas: Area[];
*/

  @OneToMany(type => Inscricao, inscricao => inscricao.concurso)
  inscricao: Inscricao[];

  @ManyToOne(type => OrgaoConcurso, orgaoConcurso => orgaoConcurso.concurso)
  @JoinColumn({ name: 'orgaoconcursoid' })
  @Index('orgaoconcursoid_index')
  orgaoConcurso: OrgaoConcurso;

  @ManyToMany(type => Habilidade, habilidade => habilidade.id)
  @JoinTable({
    name: 'concurso_habilidade',
    joinColumn: { name: 'concursoid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'habilidadeid', referencedColumnName: 'id' },
  })
  habilidade: Habilidade[];
}
