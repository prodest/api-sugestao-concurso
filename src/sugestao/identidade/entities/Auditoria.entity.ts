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

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  dataregistro: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  atualizadoem: Date;
}
