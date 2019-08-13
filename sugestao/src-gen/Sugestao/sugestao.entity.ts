import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from "@nestjs/swagger";

@Entity()
export class Sugestao {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@Column()
	orgao_origem: string;

	@ApiModelProperty()
	@Column()
	porcentagem: number;

	@ApiModelProperty()
	@Column()
	orgao_destino: string;
}
