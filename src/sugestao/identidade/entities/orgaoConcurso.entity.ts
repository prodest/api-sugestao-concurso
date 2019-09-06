import {
  Entity,
  Column,
  OneToMany

} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Concurso } from './concurso.entity';

@Entity()
export class OrgaoConcurso extends Auditoria {
  @Column({ type: 'varchar', length: 250 })
  nome: string;

  @OneToMany(type => Concurso, concurso => concurso.orgaoConcurso)
  concurso: Concurso[];

}
