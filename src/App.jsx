import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage/index";
import Login from "./Component/Pages/Login/index";
import Signup from "./Component/Pages/Signup/signup";
import DashBoard from "./layouts/Dashboard/Dashboard";
import UserDashBoard from "./user/layouts/Dashboard/Dashboard";
import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tender" component={LandingPage} />
            <Route exact path="/About" component={LandingPage} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/signup" component={Signup} />
            <Route exact path="/dashboards" component={UserDashBoard} />{" "}
            <Route exact path="/dashboard" component={DashBoard} />
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
