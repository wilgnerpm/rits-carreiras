import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Carreiras from '../pages/Carreiras';
import Carreira from '../pages/Carreira';
import SigIn from '../pages/SigIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/carreiras" exact component={Carreiras} />
      <Route path="/carreiras/:url" component={Carreira} />
      <Route path="/sigin"  component={SigIn} />
      <Route path="/dashboard"  isPrivate  component={Dashboard} />

    </Switch>
  );
}
