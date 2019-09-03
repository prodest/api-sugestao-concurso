import { Entity, Column, Index, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';
@Entity()
export class Classificacao extends Auditoria {
  @Column({ type: 'int' })
  @Index('posicao_index')
  posicao: number;

  @Column({ type: 'float' })
  @Index('pontuacaoexperiencia_index')
  pontuacaoexperiencia: number;

  @Column({ type: 'float' })
  @Index('pontuacaotitulo_index')
  pontuacaotitulo: number;

  @Column({ type: 'float' })
  @Index('pontuacaoimportada_index')
  pontuacaoimportada: number;

  @OneToMany(type => Inscricao, inscricoes => inscricoes.id)
  inscricoes: Inscricao[];
}
