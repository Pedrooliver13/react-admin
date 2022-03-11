import { Grid } from "@material-ui/core";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" sortable={false} />
        <EditButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export const UserUpdate = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <Grid container spacing={2}>
          <Grid md={12}>
          <TextInput source="name" />
          </Grid>
          <TextInput source="name" />
        </Grid>
      </SimpleForm>
    </Edit>
  );
};
