import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ database: 'DbConnectionSugestaoToken' })
export class Sugestao extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 10 })
  orgao_origem: string;

  @Column({ type: 'int' })
  porcentagem: number;

  @Column({ type: 'varchar', length: 10 })
  orgao_destino: string;
}
