import { Module, HttpModule } from "@nestjs/common";
import { sugestaoOrgaoProviders } from "./sugestao_orgao.provider";
import { SugestaoOrgaoController } from "./sugestao_orgao.controller";
import { MongoDatabaseModule } from "../database/mongo_database.module";
import { SugestaoOrgaoService } from "./sugestao_orgao.service";
import { RespostaSugestaoModule } from "../../identidade/resposta_sugestao/resposta_sugestao.module";
import { sender } from "./sender.service";
import { PublishQueue } from "../../rabbitmq/publish";

@Module({
  imports: [
    MongoDatabaseModule,
    RespostaSugestaoModule,
    HttpModule,
    PublishQueue
  ],
  controllers: [SugestaoOrgaoController],
  providers: [
    ...sugestaoOrgaoProviders,
    SugestaoOrgaoService,
    sender,
    PublishQueue
  ],
  exports: [...sugestaoOrgaoProviders, SugestaoOrgaoService, sender]
})
export class SugestaoOrgaoModule {}
