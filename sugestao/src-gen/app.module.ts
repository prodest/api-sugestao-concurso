import { Module } from '@nestjs/common';
import { SugestaoModule } from './Sugestao/sugestao.module';

@Module({
	imports: [
			SugestaoModule,
	],
	controllers: [],
	providers: [],
})

export class AppModule {}
