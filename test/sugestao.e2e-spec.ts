import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

const feature = loadFeature('./test/features/sugestao.feature');

defineFeature(feature, test => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('O usuário deseja saber quais os cargos possuem correlação com o que está informando', ({
    given,
    when,
    then,
  }) => {
    let orgaos: { orgao: string };

    let correlacionados: any;

    given('que foi informado um cargo', () => {
      orgaos = { orgao: 'sedu' };
    });

    when('eu pesquisar no banco', async () => {
      correlacionados = await request(app.getHttpServer()).get(
        '/sugestao/' + orgaos.orgao,
      );
    });

    then('devo retornar o resultado contendo os cargos correlacionados', () => {
      expect(correlacionados.body).toEqual([
        {
          mensagem:
            'Oi, tenho 62.16% de certeza que você vai se interessar pelo processo seletivo SEDU.',
          cpf_candidatos: [
            '513FA966F1 ',
            '51408B8676 ',
            '51409F7A46 ',
            '5140A6F225 ',
            '5143EB557F ',
            '5145FBCA96 ',
          ],
        },
      ]);
    });
  });
});
