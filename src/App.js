import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from 'routes';
import test from 'components/test';
import MainLayout from 'components/layouts/MainLayout';
import 'semantic-ui/dist/semantic.min.css';

const App = () => (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);

export default App;
