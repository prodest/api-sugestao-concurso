import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Index, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { TipoContato } from './tipoContato.entity';

@Entity()
export class Contato extends Auditoria {
  @Column({ type: "varchar", length: 250, nullable: true})
  @Index("contato_index")
  contato: string;

  @ManyToOne(type => TipoContato, tipocontato => tipocontato.id)
  @JoinColumn({ name: "tipocontatoid" })
  @Index("tipocontatoid_index")
  tipocontato: TipoContato[]
}