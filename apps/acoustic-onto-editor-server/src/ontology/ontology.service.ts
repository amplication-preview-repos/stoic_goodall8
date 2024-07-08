import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OntologyServiceBase } from "./base/ontology.service.base";

@Injectable()
export class OntologyService extends OntologyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
