import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ObjectTitle } from "../object/ObjectTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { OntologyTitle } from "../ontology/OntologyTitle";

export const ClassModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="objects.id" reference="Object" label="Objects">
          <SelectInput optionText={ObjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="properties.id"
          reference="Property"
          label="Properties"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="ontologies.id"
          reference="Ontology"
          label="Ontologies"
        >
          <SelectInput optionText={OntologyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
