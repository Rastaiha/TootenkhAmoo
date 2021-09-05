import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { notificationReducer } from './notifications';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  account: accountReducer,
  notifications: notificationReducer,
  redirect: redirectReducer,
  Intl: translatorReducer,
});

export default allReducers;
