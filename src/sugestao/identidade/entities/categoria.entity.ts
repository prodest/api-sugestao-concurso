import { Entity, Column, Index, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import {Habilidade} from './habilidade.entity';


@Entity()
export class Categoria extends Auditoria {
    
  @Column({ type: "varchar", length: 250, nullable:true })
  @Index("categoria_index")
  nome: string;

  @OneToMany(type => Habilidade, habilidade => habilidade.categoria)
  habilidade: Habilidade[];
}