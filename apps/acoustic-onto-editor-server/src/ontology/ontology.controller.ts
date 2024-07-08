import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OntologyService } from "./ontology.service";
import { OntologyControllerBase } from "./base/ontology.controller.base";

@swagger.ApiTags("ontologies")
@common.Controller("ontologies")
export class OntologyController extends OntologyControllerBase {
  constructor(protected readonly service: OntologyService) {
    super(service);
  }
}
