import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Estado } from './estado.entity';
import { OrgaoDocumento } from './orgaoDocumento.entity';
import { TipoDocumento } from './tipoDocumento.entity';
import { Pessoa } from './pessoa.entity';
@Entity()
export class Documento extends Auditoria {
  @Column({ type: 'varchar', length: 250 })
  @Index('numerodocumento_index')
  numero: string;

  @Column({ type: 'date' })
  dataemissao: Date;

  @ManyToOne(type => Estado, estado => estado.id)
  @JoinColumn({ name: 'estadoid' })
  @Index('estadoid_documento_index')
  estado: Estado;

  @ManyToOne(type => OrgaoDocumento, orgaoDocumento => orgaoDocumento.id)
  @JoinColumn({ name: 'orgaodocumentoid' })
  @Index('orgaodocumentoid_index')
  OrgaoDocumento: OrgaoDocumento;

  @ManyToOne(type => TipoDocumento, tipoDocumento => tipoDocumento.id)
  @JoinColumn({ name: 'tipodocumentoid' })
  @Index('tipodocumentoid_documento_index')
  tipodocumento: TipoDocumento;

  @ManyToOne(type => Pessoa, pessoa => pessoa.id)
  @JoinColumn({ name: 'pessoaid' })
  @Index('pessoaid_documento_index')
  pessoa: Pessoa;
}
