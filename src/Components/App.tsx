import React from "react";
import AppBar from "./AppBar/AppBar";
import Home from "./pages/Home";
import Todos from "./pages/todos/Todos";
import ContentContainer from "../Components/Common/Container/ContentContainer/ContentContainer";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";

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
