import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

jest.mock('../src/identidade/pessoa/service/habilidades.providers');
jest.mock('../src/identidade/pessoa/service/pessoa.providers');
jest.mock('../src/identidade/core/core.module');
jest.mock('../src/identidade/pessoa/service/generic-pessoa.service');
jest.mock('../src/identidade/pessoa/service/selecaodt.service');

const feature = loadFeature('./test/features/habilidade.feature');

defineFeature(feature, test => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('O usuário deseja saber quem possui a(s) habilidade(s) referentes a um ou mais cargo(s)', ({
    given,
    when,
    then,
  }) => {
    let arrayCargo: { cargos: string[] };
    let resposta: any;
    given('que foi informado uma lista de cargos', () => {
      arrayCargo = {
        cargos: ['Médico', 'Cuidador', 'Programador'],
      };
    });

    when('eu pesquisar cada cargo no banco', async () => {
      resposta = await request(app.getHttpServer())
        .post('/buscarCandidatos')
        .send(arrayCargo);
    });

    then(
      'devo retornar o resultado contendo o cpf dos candidatos que possuem o cargo',
      () => {
        expect(resposta.body).toEqual([
          { cargo: 'Médico', arrayCpf: ['123456789-12', '963258451-73'] },
          { cargo: 'Cuidador', arrayCpf: ['12345674911', '12345678011'] },
          { cargo: 'Programador', arrayCpf: ['12345678912'] },
        ]);
      },
    );
  });

  test('O usuário envie uma lista vazia, ou seja, sem cargo algum', ({
    given,
    when,
    then,
  }) => {
    let arrayCargo: { cargos: string[] };
    let resposta: any;
    given('que foi informado uma lista de cargos vazia', () => {
      arrayCargo = {
        cargos: [],
      };
    });

    when('eu pesquisar o cargo no banco', async () => {
      resposta = await request(app.getHttpServer())
        .post('/buscarCandidatos')
        .send(arrayCargo);
    });

    then('devo retornar uma lista vazia', () => {
      expect(resposta.body).toEqual([]);
    });
  });
});
