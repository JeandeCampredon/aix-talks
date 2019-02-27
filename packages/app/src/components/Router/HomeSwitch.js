import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import ContentSwitch from './ContentSwitch';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/content" component={ContentSwitch} />
    <Redirect path="*" to="/" />
  </Switch>
);
