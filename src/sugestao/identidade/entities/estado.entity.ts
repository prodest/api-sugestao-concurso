import { Entity, Column, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Documento } from './documento.entity';
import { Municipio } from './municipio.entity';

@Entity()
export class Estado extends Auditoria {
  @Column({ type: "varchar", length: 2 })
  sigla: string;

  @Column({ type: "varchar", length: 100, nullable:true })
  nome: string;

  @OneToMany(type => Documento, documentos => documentos.id)
  documentos: Documento[];

  @OneToMany(type => Municipio, municipio => municipio.id)
  municipio: Municipio[];

}
