import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
   .setTitle('Api - Identidade Cidadã')
   .setDescription('Api que retorna possiveis candidatos de um concurso')
   .setVersion('1.0')
   .addTag('selecaodt')
   .build();
 const document = SwaggerModule.createDocument(app, options);
 SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
