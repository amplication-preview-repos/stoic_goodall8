import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { OntologyWhereUniqueInput } from "../ontology/OntologyWhereUniqueInput";

export type ClassModelUpdateInput = {
  name?: string | null;
  description?: string | null;
  objects?: ObjectWhereUniqueInput | null;
  properties?: PropertyWhereUniqueInput | null;
  ontologies?: OntologyWhereUniqueInput | null;
};
