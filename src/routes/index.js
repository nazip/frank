import index from './Root';
import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';

export default
<MainLayout>
  <Route {...index}/>
</MainLayout>;
