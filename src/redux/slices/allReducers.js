import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { dialogMessageReducer } from './dialogMessage';
import { exchangeReducer } from './exchange';
import { gameReducer } from './game';
import { notificationReducer } from './notifications';
import { problemReducer } from './problem';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  game: gameReducer,
  account: accountReducer,
  notifications: notificationReducer,
  exchange: exchangeReducer,
  dialogMessage: dialogMessageReducer,
  redirect: redirectReducer,
  problem: problemReducer,
  Intl: translatorReducer,
});

export default allReducers;
