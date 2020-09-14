import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import About from "../layout/About";
import Projects from "../layout/Projects";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
