import { Object } from "../object/Object";
import { Property } from "../property/Property";
import { Ontology } from "../ontology/Ontology";

export type ClassModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  objects?: Object | null;
  properties?: Property | null;
  ontologies?: Ontology | null;
};
