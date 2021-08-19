import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SummerSchoolLanding from '../containers/SummerSchool';


const Root = () => {
  return (
    <Switch>
      <Route path="/" component={SummerSchoolLanding} />
    </Switch>
  );
};
export default Root;
