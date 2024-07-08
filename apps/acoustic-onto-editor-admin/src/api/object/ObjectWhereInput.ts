import { StringFilter } from "../../util/StringFilter";
import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type ObjectWhereInput = {
  id?: StringFilter;
  idClass?: ClassModelWhereUniqueInput;
};
