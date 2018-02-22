import test from 'components/test';
import test0 from 'components/test0';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const index = {
  path: '/',
  component: test
};

const index0 = {
  path: '/a',
  component: test0
};

const Routes = () => (
  <Switch>
    <Route exact {...index}/>
    <Route {...index0}/>
  </Switch>
);


export default Routes;
