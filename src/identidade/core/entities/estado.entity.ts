import { Entity, Column, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Documento } from './documento.entity';
import { Endereco } from './endereco.entity';

@Entity()
export class Estado extends Auditoria {
  @Column({ type: "varchar", length: 2 })
  sigla: string;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @OneToMany(type => Documento, documentos => documentos.id)
  documentos: Documento[];

  @OneToMany(type => Endereco, endereco => endereco.id)
  endereco: Endereco[];

}
