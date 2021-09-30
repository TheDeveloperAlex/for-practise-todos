import React from "react";
import AppBar from "./AppBar/AppBar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import ContentContainer from "../Components/Common/Container/ContentContainer/ContentContainer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    // <div>
    <ContentContainer>
      <div>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </div>
    </ContentContainer>
    // </div>
  );
};

export default App;
