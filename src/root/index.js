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
import MainHall from '../containers/Rooms/MainHall';
import Mashahir from '../containers/Rooms/Mashahir';
import Rahro from '../containers/Rooms/Rahro';
import SecurityRoom from '../containers/Rooms/SecurityRoom';
import Viking from '../containers/Rooms/Viking';
import PrivateRoute from './PrivateRoute';

const Root = () => {
  return (
    <Switch>
      <PrivateRoute path="/exchange/" component={Exchange} />
      <PrivateRoute path="/baygani/:mode/" component={Baygani} />
      <PrivateRoute path="/baygani/" component={Baygani} />
      <PrivateRoute path="/main_hall/" component={MainHall} />
      <PrivateRoute path="/greece/" component={Greece} />
      <PrivateRoute path="/iran/" component={Iran} />
      <PrivateRoute path="/egypt/" component={Egypt} />
      <PrivateRoute path="/japan/" component={Japan} />
      <PrivateRoute path="/viking/" component={Viking} />
      <PrivateRoute path="/security_room/" component={SecurityRoom} />
      <PrivateRoute path="/rahro/" component={Rahro} />
      <PrivateRoute path="/mashahir/" component={Mashahir} />
      <PrivateRoute path="/problem/:problemGroupId/:submitId/:problemId/" component={ProblemView} />
      <Route path="/login/" component={Login} />
      <Route path="/" component={Login} />
      <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  );
};

export default Root;
