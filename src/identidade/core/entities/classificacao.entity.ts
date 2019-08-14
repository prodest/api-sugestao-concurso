import { Entity, Column, OneToOne, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';

@Entity()
export class Classificacao extends Auditoria {
  @Column({ type: "int" })
  posicao: number;

  @Column({ type: "int" })
  pontuacaoexperiencia: number;

  @Column({ type: "int" })
  pontuacaotitulo: number;

  @Column({ type: "int" })
  pontuacaoimportada: number;

  @OneToOne(type => Inscricao)
  @JoinColumn({name:"inscricaoid"})
  @Index("inscricaoid_index")
  inscricao: Inscricao;
}
