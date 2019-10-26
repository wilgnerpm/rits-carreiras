import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Carreiras from '../pages/Carreiras';
import Carreira from '../pages/Carreira';
import SigIn from '../pages/SigIn';
import Dashboard from '../pages/Dashboard';
import DCarreira from '../pages/Dashboard/Carreira';
import DCarreiraEditar from '../pages/Dashboard/Carreira/Editar';
export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Carreiras} />
      <Route path="/carreiras" exact component={Carreiras} />
      <Route path="/carreiras/:url" component={Carreira} />
      <Route path="/sigin"  component={SigIn} />
      <Route path="/dashboard" exact isPrivate  component={Dashboard} />
      <Route path="/dashboard/carreiras/:id" exact  isPrivate  component={DCarreira} />
      <Route path="/dashboard/carreiras/:id/editar"   isPrivate  component={DCarreiraEditar} />
    </Switch>
  );
}
