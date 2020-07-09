import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../pages/login.jsx";
import RedirectPage from "../pages/redirect";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/login"} component={Login} />
          <Route path={"/redirect"} component={RedirectPage} />
          <Redirect from={"/"} to={"/redirect"} />
        </Switch>
      </Router>
    </>
  );
}
