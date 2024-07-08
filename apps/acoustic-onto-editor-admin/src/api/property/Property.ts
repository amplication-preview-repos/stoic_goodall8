import { ClassModel } from "../classModel/ClassModel";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  idClass?: ClassModel | null;
};
