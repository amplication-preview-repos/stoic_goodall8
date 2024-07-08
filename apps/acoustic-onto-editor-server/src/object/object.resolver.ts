import * as graphql from "@nestjs/graphql";
import { ObjectResolverBase } from "./base/object.resolver.base";
import { Object } from "./base/Object";
import { ObjectService } from "./object.service";

@graphql.Resolver(() => Object)
export class ObjectResolver extends ObjectResolverBase {
  constructor(protected readonly service: ObjectService) {
    super(service);
  }
}
