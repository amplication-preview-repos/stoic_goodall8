import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const OntologyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="idOntology.id"
          reference="ClassModel"
          label="id_ontology"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
