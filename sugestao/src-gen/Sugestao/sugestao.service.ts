import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sugestao } from './sugestao.entity'

@Injectable()
export class SugestaoService {
	
	constructor(
		@Inject('SUGESTAO_REPOSITORY')
		private readonly sugestaoRepository: Repository<Sugestao>
	){}
	
	async findAll(): Promise<Sugestao[]> {
		return await this.sugestaoRepository.find();
	}
	
	async findOne(id: number): Promise<Sugestao> {
		return await this.sugestaoRepository.findOne({id: id});
	}
	
	async createOne(sugestao: Sugestao): Promise<void> {
		await this.sugestaoRepository.save(sugestao);
	}
	
	async updateOne(sugestao: Sugestao): Promise<void> {
		await this.sugestaoRepository.update(sugestao.id, sugestao);
	}
	
	async deleteOne(id: number): Promise<void> {
		await this.sugestaoRepository.delete(id)
	}
	
}
