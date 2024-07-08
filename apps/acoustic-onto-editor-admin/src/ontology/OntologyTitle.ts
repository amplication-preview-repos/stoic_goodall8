import { Ontology as TOntology } from "../api/ontology/Ontology";

export const ONTOLOGY_TITLE_FIELD = "id";

export const OntologyTitle = (record: TOntology): string => {
  return record.id?.toString() || String(record.id);
};
