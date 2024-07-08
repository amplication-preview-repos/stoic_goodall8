import { Module } from "@nestjs/common";
import { OntologyModuleBase } from "./base/ontology.module.base";
import { OntologyService } from "./ontology.service";
import { OntologyController } from "./ontology.controller";
import { OntologyResolver } from "./ontology.resolver";

@Module({
  imports: [OntologyModuleBase],
  controllers: [OntologyController],
  providers: [OntologyService, OntologyResolver],
  exports: [OntologyService],
})
export class OntologyModule {}
