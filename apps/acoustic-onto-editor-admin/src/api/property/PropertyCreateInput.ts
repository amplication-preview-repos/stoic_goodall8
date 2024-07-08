import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type PropertyCreateInput = {
  name?: string | null;
  idClass?: ClassModelWhereUniqueInput | null;
};
