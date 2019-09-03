import { Entity, Column, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';
@Entity()
export class Area extends Auditoria {
  @Column({ type: 'varchar', nullable: true })
  nome: string;

  @OneToMany(type => Inscricao, inscricoes => inscricoes.id)
  inscricoes: Inscricao[];
}
