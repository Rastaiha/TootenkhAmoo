import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import ProblemView from '../containers/Player/ProblemView';
import Egypt from '../containers/Rooms/Egypt';
import Japan from '../containers/Rooms/Japan';
import Viking from '../containers/Rooms/Viking';
import Security_room from '../containers/Rooms/Security_room';
import Greece from '../containers/Rooms/Greece';
import SummerSchoolLanding from '../containers/SummerSchool';

const Root = () => {

  return (
    <Switch>
      <Route path="/greece/" component={Greece} />
      <Route path="/egypt/" component={Egypt} />
      <Route path="/japan/" component={Japan} />
      <Route path="/viking/" component={Viking} />
      <Route path="/security_room/" component={Security_room} />
      <Route path="/login/" component={Login} />
      <Route path="/problem/:problemId/" component={ProblemView} />
      <Route path="/" component={SummerSchoolLanding} />
      <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  );
};

export default Root;
