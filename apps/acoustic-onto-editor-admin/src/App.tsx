import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { ObjectList } from "./object/ObjectList";
import { ObjectCreate } from "./object/ObjectCreate";
import { ObjectEdit } from "./object/ObjectEdit";
import { ObjectShow } from "./object/ObjectShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { OntologyList } from "./ontology/OntologyList";
import { OntologyCreate } from "./ontology/OntologyCreate";
import { OntologyEdit } from "./ontology/OntologyEdit";
import { OntologyShow } from "./ontology/OntologyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AcousticOntoEditor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="Object"
          list={ObjectList}
          edit={ObjectEdit}
          create={ObjectCreate}
          show={ObjectShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="Ontology"
          list={OntologyList}
          edit={OntologyEdit}
          create={OntologyCreate}
          show={OntologyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
