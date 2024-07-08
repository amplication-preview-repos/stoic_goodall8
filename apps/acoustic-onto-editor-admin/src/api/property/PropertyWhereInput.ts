import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type PropertyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  idClass?: ClassModelWhereUniqueInput;
};
