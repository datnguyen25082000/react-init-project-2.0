import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Home, Detail } from "../containers";
import { BlankLayout } from "../layouts";

export const Routers = () => {
  return (
    <Router>
      <Switch>
        <PrivateRouter
          exact={true}
          path={"/"}
          component={Home}
          layout={BlankLayout}
        />

        <PrivateRouter
          exact={true}
          path={"/post/:slug"}
          component={Detail}
          layout={BlankLayout}
        />
      </Switch>
    </Router>
  );
};
