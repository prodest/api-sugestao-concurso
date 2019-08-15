import { Injectable } from '@nestjs/common';
import { SugestaoBaseService } from './generic-pessoa.service';
import { PessoaDto } from '../dto/pessoa.dto';

@Injectable()
export class SugestaoService {
  constructor(private readonly databaService: SugestaoBaseService) {}

  async returnPeopleByOffice(offices: Array<string>): Promise<PessoaDto[]> {
    const peopleDto: PessoaDto[] = new Array<PessoaDto>();
    for (let i = 0; i < offices.length; i++) {
      const people = await this.databaService.findByOfficeName(offices[i]);
      const arrayCPF = this.returnArrayCPF(people);
      const personDto = new PessoaDto(offices[i], arrayCPF);

      peopleDto.push(personDto);
    }
    return peopleDto;
  }

  returnArrayCPF(people: { numerocpf: string }[]) {
    let arrayCPF: string[] = new Array<string>();
    for (let i = 0; i < people.length; i++) {
      arrayCPF.push(people[i].numerocpf);
    }
    return arrayCPF;
  }

  async retornaOrgaosSimilares(orgao: string) {
    return await this.databaService.buscaOrgaos(orgao);
  }
}
