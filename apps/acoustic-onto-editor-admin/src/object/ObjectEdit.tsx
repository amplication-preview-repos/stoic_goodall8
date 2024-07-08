import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const ObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
