import { Entity, Column, ManyToMany, JoinTable} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Titulo } from './titulo.entity';

@Entity()
export class Habilidade extends Auditoria {

  @Column({ type: "varchar", length: 250 })
  descricao: string;

  @ManyToMany(type => Titulo, titulo => titulo.id)
  @JoinTable({ name: "habilidade_titulo", 
               joinColumn: {name: "habilidadeid", referencedColumnName:"id"},
               inverseJoinColumn:{ name:"tituloid", referencedColumnName:"id"},
  })
  titulo: Titulo[];
}
