import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Estado } from './estado.entity';

@Entity()
export class Endereco extends Auditoria {

  @Column({ type: "varchar", length: 200 })
  bairro: string;

  @Column({ type: "varchar", length: 20 })
  @Index("cep_index")
  cep: string;

  @Column({ type: "varchar", length: 200 })
  cidade: string;

  @Column({ type: "varchar", length: 500 })
  logradouro: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  complemento: string;

  @Column({ type: "int" })
  numero: number;

  @ManyToOne(type => Estado, estado => estado.id)
  @JoinColumn({name:"estadoid"})
  @Index("estadoid_endereco_index")
  estado: Estado;
}
