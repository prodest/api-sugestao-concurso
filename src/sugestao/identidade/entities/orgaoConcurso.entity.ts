import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Concurso } from './concurso.entity';
import { Contato } from './contato.entity';

@Entity()
export class OrgaoConcurso extends Auditoria {
  @Column({ type: 'varchar', length: 250 })
  nome: string;

  @OneToMany(type => Concurso, concurso => concurso.orgaoConcurso)
  concurso: Concurso[];

  @ManyToMany(type => Contato)
  @JoinTable({
    name: 'orgaoconcurso_contato',
    joinColumn: { name: 'orgaoconcursoid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'contatoid', referencedColumnName: 'id' },
  })
  contato: Contato[];
}
