import { Entity, Column, OneToMany, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Pessoa_experiencia } from './pessoaexperiencia.entity';

@Entity()
export class Experiencia extends Auditoria {
  @Column({ type: 'varchar' })
  nome: string;

  @OneToMany(
    type => Pessoa_experiencia,
    pessoa_experiencia => pessoa_experiencia.id,
  )
  pessoa_experiencia: Pessoa_experiencia[];
}
