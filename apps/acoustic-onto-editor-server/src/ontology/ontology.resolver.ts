import * as graphql from "@nestjs/graphql";
import { OntologyResolverBase } from "./base/ontology.resolver.base";
import { Ontology } from "./base/Ontology";
import { OntologyService } from "./ontology.service";

@graphql.Resolver(() => Ontology)
export class OntologyResolver extends OntologyResolverBase {
  constructor(protected readonly service: OntologyService) {
    super(service);
  }
}
