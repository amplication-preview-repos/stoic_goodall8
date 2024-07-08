import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OBJECT_TITLE_FIELD } from "../object/ObjectTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { ONTOLOGY_TITLE_FIELD } from "../ontology/OntologyTitle";

export const ClassModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Classes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <ReferenceField label="Objects" source="object.id" reference="Object">
          <TextField source={OBJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Properties"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Ontologies"
          source="ontology.id"
          reference="Ontology"
        >
          <TextField source={ONTOLOGY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
