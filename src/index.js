import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./views/NotFound";

import Covid19IndiaOrg from "./views/Covid19IndiaOrg";
import CovidIndiaOrg from "./views/CovidIndiaOrg";
import CovidIndiaUpdates from "./views/CovidIndiaUpdate";
import MOH from "./views/MOH";
import WHO from "./views/WHO";
import Worldometer from "./views/Worldometer";
import Home from "./views/Home";
import WHODashboard from "./views/WHODashboard";

ReactDOM.render(
  <Router basename="covid-aggregator/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="covid-aggregator/" component={Home} />
      <Route path="/Worldometer" component={Worldometer} />
      <Route path="/covid19-india-org" component={Covid19IndiaOrg} />
      <Route path="/covid-india-org" component={CovidIndiaOrg} />
      <Route path="/covid-india-updates" component={CovidIndiaUpdates} />
      <Route path="/ministry-of-healthpower" component={MOH} />
      <Route path="/WHO" component={WHO} />
      <Route path="/who-dashboard" component={WHODashboard} />
      {/* Only useful in development mode */}
      <Route component={Home} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
