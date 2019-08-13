import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const pacote = require( '../package.json' );
const fs = require( 'fs' );

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle( pacote.name )
    .setDescription( pacote.description )
    .setVersion( pacote.version )
    .setSchemes( 'http', 'https' )
    .build();

  const document = SwaggerModule.createDocument( app, options );

  fs.writeFileSync( 'swagger.json', JSON.stringify( document, null, 2 ) );

  SwaggerModule.setup( `/`, app, document );


  await app.listen(3000);
}
bootstrap();
