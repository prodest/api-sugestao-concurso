import { Entity, Column, ManyToOne, JoinColumn, Index, BaseEntity, PrimaryColumn} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Experiencia } from './experiencia.entity';

@Entity()
export class Pessoa_experiencia extends BaseEntity {

    @PrimaryColumn()
    id: number;

    @Column({ type: "int"})
    tempomeses: BigInteger;

    @ManyToOne(type => Pessoa, pessoa => pessoa.id)
    @JoinColumn({name:"pessoaid"})
    @Index("pessoaid_pessoa_experiencia_index")
    municipio: Pessoa;

    @ManyToOne(type => Experiencia, experiencia => experiencia.id)
    @JoinColumn({name:"experienciaid"})
    @Index("experienciaid_pessoa_experiencia_index")
    experiencia: Experiencia;

}
