import React from 'react';
import { Router } from 'react-router';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import history from './history'
import {Route, Switch, Redirect} from 'react-router-dom'

const Routes = () => (
  <Router history={history}>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
