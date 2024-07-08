import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type PropertyUpdateInput = {
  name?: string | null;
  idClass?: ClassModelWhereUniqueInput | null;
};
