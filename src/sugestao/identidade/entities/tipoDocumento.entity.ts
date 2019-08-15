import { Entity, Column, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Documento } from './documento.entity';

@Entity()
export class TipoDocumento extends Auditoria {
  @Column({ type: "varchar", length: 250 })
  nome: string;

  @OneToMany(type => Documento, documentos => documentos.id)
  documentos: Documento[];
}
