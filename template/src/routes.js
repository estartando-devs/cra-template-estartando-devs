import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    /* PLOP_ROUTE_IMPORT */
  Home
} from './containers';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          /* PLOP_INJECT_ROUTE */
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
