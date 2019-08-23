import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Deficiencia } from './deficiencia.entity';
import { Escolaridade } from './escolaridade.entity';
import { EstadoCivil } from './estadoCivil.entity';
import { Endereco } from './endereco.entity';
import { Contato } from './contato.entity';
import { Inscricao } from './inscricao.entity';
import { Documento } from './documento.entity';
import { Habilidade } from './habilidade.entity';
import { Titulo } from './titulo.entity';
import { Pessoa_experiencia } from './pessoaexperiencia.entity';
import { Pessoa_endereco } from './pessoaendereco.entity';

@Entity()
export class Pessoa extends Auditoria {
  @Column({ type: 'varchar', length: 250 })
  nome: string;

  @Column({ name: 'datanascimento', type: 'date' })
  dataNascimento: Date;

  @Column({ name: 'nomepai', type: 'varchar', length: 250 })
  nomePai: string;

  @Column({ name: 'nomemae', type: 'varchar', length: 250 })
  nomeMae: string;

  @Column({ name: 'numerocpf', type: 'varchar', length: 20 })
  @Index('numerocpf_index')
  numeroCPF: string;

  @Column({ type: 'varchar', length: 10 })
  sexo: string;

  @Column({ name: 'possuideficiencia', type: 'bit' })
  possuiDeficiencia: boolean;

  @OneToMany(
    type => Pessoa_experiencia,
    pessoa_experiencia => pessoa_experiencia.id,
  )
  pessoa_experiencia: Pessoa_experiencia[];

  @OneToMany(type => Pessoa_endereco, pessoa_endereco => pessoa_endereco.id)
  pessoa_endereco: Pessoa_endereco[];

  @ManyToMany(type => Deficiencia, deficiencia => deficiencia.id)
  @JoinTable({
    name: 'pessoa_deficiencia',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'deficienciaid', referencedColumnName: 'id' },
  })
  deficiencia: Deficiencia;

  @ManyToMany(type => Escolaridade)
  @JoinTable({
    name: 'pessoa_escolaridade',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'escolaridadeid', referencedColumnName: 'id' },
  })
  escolaridade: Escolaridade;

  @ManyToMany(type => EstadoCivil)
  @JoinTable({
    name: 'pessoa_estadocivil',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'estadocivilid', referencedColumnName: 'id' },
  })
  estadoCivil: EstadoCivil[];

  @ManyToMany(type => Contato)
  @JoinTable({
    name: 'pessoa_contato',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'contatoid', referencedColumnName: 'id' },
  })
  contato: Contato[];

  @OneToMany(type => Inscricao, inscricao => inscricao.pessoa)
  inscricao: Inscricao[];

  @OneToMany(type => Documento, documentos => documentos.id)
  documentos: Documento[];

  @ManyToMany(type => Habilidade, habilidade => habilidade.id)
  @JoinTable({
    name: 'pessoa_habilidade',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'habilidadeid', referencedColumnName: 'id' },
  })
  habilidade: Habilidade[];

  @ManyToMany(type => Titulo, titulo => titulo.id)
  @JoinTable({
    name: 'pessoa_titulo',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tituloid', referencedColumnName: 'id' },
  })
  titulo: Titulo[];
}
