import { ClassModel } from "../classModel/ClassModel";

export type Ontology = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  idOntology?: ClassModel | null;
};
