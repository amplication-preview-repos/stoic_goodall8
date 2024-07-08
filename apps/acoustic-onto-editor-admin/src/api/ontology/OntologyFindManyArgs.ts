import { OntologyWhereInput } from "./OntologyWhereInput";
import { OntologyOrderByInput } from "./OntologyOrderByInput";

export type OntologyFindManyArgs = {
  where?: OntologyWhereInput;
  orderBy?: Array<OntologyOrderByInput>;
  skip?: number;
  take?: number;
};
