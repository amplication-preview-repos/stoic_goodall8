import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  objectsId?: SortOrder;
  propertiesId?: SortOrder;
  ontologiesId?: SortOrder;
};
