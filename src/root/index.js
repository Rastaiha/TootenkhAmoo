import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SummerSchoolLanding from '../containers/SummerSchool';

const Root = () => {
  return (
    <Switch>
      <Route path="/" component={SummerSchoolLanding} />
      <Route path="*" render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  );
};
export default Root;
