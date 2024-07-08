import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="idClass.id"
          reference="ClassModel"
          label="id_class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
