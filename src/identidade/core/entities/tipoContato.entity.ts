import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Index, JoinColumn, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Contato } from './contato.entity';

@Entity()
export class TipoContato extends Auditoria {
  @JoinColumn({name: "tipocontato"})
  @Column({ type: "varchar", length: 250 })
  @Index("tipocontato_index")
  tipocontato: string;

  @OneToMany(type => Contato, contatos => contatos.id)
  contatos: Contato[];
}