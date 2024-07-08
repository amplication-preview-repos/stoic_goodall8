import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const OntologyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="idOntology.id"
          reference="ClassModel"
          label="id_ontology"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
