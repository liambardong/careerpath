import React from "react";
import { Route, Switch } from "react-router-dom";
import CareerPaths from "./containers/CareerPaths";
import SubmitPaths from "./containers/SubmitPaths";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/careerpaths">
        <CareerPaths />
      </Route>
      <Route exact path="/submitpaths">
        <SubmitPaths />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}