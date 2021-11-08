import React, { ReactElement } from "react";
import LoginPage from "./components/pages/LoginPage/";
import RegisterPage from "./components/pages/RegisterPage/";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import ShopPage from "./components/pages/ShopPage";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <div>
      <Router basename="">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" component={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </div>
  );
}
