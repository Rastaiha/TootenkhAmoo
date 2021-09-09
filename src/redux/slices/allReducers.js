import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { exchangeReducer } from './exchange';
import { notificationReducer } from './notifications';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  account: accountReducer,
  notifications: notificationReducer,
  exchange: exchangeReducer,
  redirect: redirectReducer,
  Intl: translatorReducer,
});

export default allReducers;
