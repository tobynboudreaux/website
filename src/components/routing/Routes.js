import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
