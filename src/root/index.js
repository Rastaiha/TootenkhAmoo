import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import ProblemView from '../containers/Player/ProblemView';
import Egypt from '../containers/Rooms/Egypt';
import Greece from '../containers/Rooms/Greece';
import Japan from '../containers/Rooms/Japan';
import Iran from '../containers/Rooms/Iran';
import Security_room from '../containers/Rooms/Security_room';
import Viking from '../containers/Rooms/Viking';
import SummerSchoolLanding from '../containers/SummerSchool';

const Root = () => {

  return (
    <Switch>
      <Route path="/greece/" component={Greece} />
        <Route path="/iran/" component={Iran} />
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
