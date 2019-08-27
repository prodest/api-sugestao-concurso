import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { SugestaoOrgao } from './interfaces/sugestao_orgao.interface';

@Injectable()
export class SugestaoOrgaoService {
  constructor(
    @Inject('sugestaoOrgaoConnectionToken')
    private readonly sugestaoOrgaoModel: Model<SugestaoOrgao>,
  ) {}

  async create(createSugestaorDto: any) {
    let sugestao_orgao;

    try {
      sugestao_orgao = new this.sugestaoOrgaoModel(createSugestaorDto);

      return await sugestao_orgao.save();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findAll(): Promise<SugestaoOrgao[]> {
    try {
      return await this.sugestaoOrgaoModel.find().exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async find(orgao: string): Promise<SugestaoOrgao[]> {
    try {
      return await this.sugestaoOrgaoModel
        .find({ orgao_destino: orgao })
        .exec();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
