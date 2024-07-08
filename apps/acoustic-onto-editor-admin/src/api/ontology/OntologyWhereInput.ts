import { StringFilter } from "../../util/StringFilter";
import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type OntologyWhereInput = {
  id?: StringFilter;
  idOntology?: ClassModelWhereUniqueInput;
};
