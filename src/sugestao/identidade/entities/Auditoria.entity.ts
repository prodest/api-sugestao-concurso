import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export class Auditoria extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn({ type: 'datetime', nullable: false })
  dataregistro: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false })
  atualizadoem: Date;
}
