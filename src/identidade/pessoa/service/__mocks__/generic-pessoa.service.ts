import { Injectable } from '@nestjs/common';

@Injectable()
export class GenericPessoaService {
  findByOfficeName(cargo: string): Array<{ numerocpf: string }> {
    if (cargo == 'Médico') {
      let a: Array<{ numerocpf: string }> = [
        { numerocpf: '123456789-12' },
        { numerocpf: '963258451-73' },
      ];
      return a;
    } else if (cargo == 'Cuidador') {
      let a: Array<{ numerocpf: string }> = [
        { numerocpf: '12345674911' },
        { numerocpf: '12345678011' },
      ];
      return a;
    } else if (cargo == 'Programador') {
      let a: Array<{ numerocpf: string }> = [{ numerocpf: '12345678912' }];
      return a;
    }
  }
}
