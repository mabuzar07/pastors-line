import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactButtons from "./components/ContactButtons";
import { routes } from "./constants/routes.constants";
import USContacts from "./pages/USContacts";
import AllContacts from "./pages/AllContacts";
import NotFoundPage from "./pages/NotFound";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.USContacts} exact>
            <USContacts />
          </Route>
          <Route path={routes.AllContact} exact>
            <AllContacts />
          </Route>
          <Route path={routes.Home} exact>
            <ContactButtons />
          </Route>
          <Route path={routes.NotFound}>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
