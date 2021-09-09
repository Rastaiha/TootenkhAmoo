import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import ProblemView from '../containers/ProblemView';
import Baygani from '../containers/Rooms/Baygani';
import Egypt from '../containers/Rooms/Egypt';
import Exchange from '../containers/Rooms/Exchange';
import Greece from '../containers/Rooms/Greece';
import Iran from '../containers/Rooms/Iran';
import Japan from '../containers/Rooms/Japan';
import Mashahir from '../containers/Rooms/Mashahir';
import Rahro from '../containers/Rooms/Rahro';
import SecurityRoom from '../containers/Rooms/SecurityRoom';
import Viking from '../containers/Rooms/Viking';
import PrivateRoute from './PrivateRoute';

const Root = () => {
  return (
    <Switch>
      <Route path="/exchange/" component={Exchange} />
      <Route path="/baygani/" component={Baygani} />
      <Route path="/greece/" component={Greece} />
      <Route path="/iran/" component={Iran} />
      <Route path="/egypt/" component={Egypt} />
      <Route path="/japan/" component={Japan} />
      <Route path="/viking/" component={Viking} />
      <Route path="/security_room/" component={SecurityRoom} />
      <Route path="/rahro/" component={Rahro} />
      <Route path="/mashahir/" component={Mashahir} />
      <Route path="/login/" component={Login} />
      <Route path="/problem/:problemId/" component={ProblemView} />
      <Route path="/" component={Login} />
      <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  );
};

export default Root;
