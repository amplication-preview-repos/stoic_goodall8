import { ClassModel } from "../classModel/ClassModel";

export type Object = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  idClass?: ClassModel | null;
};
