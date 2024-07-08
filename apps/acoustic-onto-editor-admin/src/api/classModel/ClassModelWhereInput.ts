import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { OntologyWhereUniqueInput } from "../ontology/OntologyWhereUniqueInput";

export type ClassModelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  objects?: ObjectWhereUniqueInput;
  properties?: PropertyWhereUniqueInput;
  ontologies?: OntologyWhereUniqueInput;
};
