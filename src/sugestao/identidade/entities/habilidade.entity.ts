import {
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
  JoinColumn,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Titulo } from './titulo.entity';
import { Categoria } from './categoria.entity';

@Entity()
export class Habilidade extends Auditoria {
  @Column({ type: 'varchar', nullable:true })
  @Index('habilidadedescricao_index')
  descricao: string;

  @ManyToMany(type => Titulo, titulo => titulo.id)
  @JoinTable({
    name: 'habilidade_titulo',
    joinColumn: { name: 'habilidadeid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tituloid', referencedColumnName: 'id' },
  })
  titulo: Titulo[];

  @ManyToOne(type => Categoria, categoria => categoria.habilidade)
  @JoinColumn({ name: 'categoriaid' })
  @Index('tipocategoria_index')
  categoria: Categoria;
}
