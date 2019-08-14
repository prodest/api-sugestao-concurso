import { Entity, Column} from 'typeorm';
import { Auditoria } from './Auditoria.entity';

@Entity()
export class Titulo extends Auditoria {

  @Column({ type: "varchar", length: 250 })
  descricao: string;

}
