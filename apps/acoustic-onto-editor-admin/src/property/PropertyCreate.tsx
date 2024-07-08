import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
