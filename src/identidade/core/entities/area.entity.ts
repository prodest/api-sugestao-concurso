import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Cargo } from './cargo.entity';
import { Concurso } from './concurso.entity';


export class Area extends Auditoria {

  @Column({ type: "varchar", length: 250 })
  nome: string;

  @ManyToOne(type => Area, areaSuperior => areaSuperior.id)
  @JoinColumn({ name: "areasuperior" })
  areasuperior: Area;

  @Column({ type: "boolean" })
  ocultacandidato: boolean;

  @OneToMany(type => Cargo, cargos => cargos.id)
  cargos: Cargo[];

  @ManyToOne(type => Concurso, concurso => concurso.id)
  concurso: Concurso;
}
