import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Area } from './area.entity';
import { Inscricao } from './inscricao.entity';


export class Cargo extends Auditoria {

  @Column({ type: "varchar", length: 250 })
  nome: string;

  @ManyToOne(type => Area, area => area.id)
  area: Area;

  @ManyToOne(type => Inscricao, inscricoes => inscricoes.id)
  inscricoes: Inscricao[];
}
