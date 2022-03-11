import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList, UserCreate, UserUpdate } from "./pages/users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={UserList}
        create={UserCreate}
        edit={UserUpdate}
      />
    </Admin>
  );
}

export default App;
