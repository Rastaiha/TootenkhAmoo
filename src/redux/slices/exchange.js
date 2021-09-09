import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  allExchangesUrl,
  playerExchangesUrl,
} from '../constants/urls';

export const getAllExchangesAction = createAsyncThunkApi(
  'exchange/getAllExchangesAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت همه‌ی مبادلات وجود داشت.',
    },
  }
);

export const getPlayerExchangesAction = createAsyncThunkApi(
  'exchange/getPlayerExchangesAction',
  Apis.GET,
  playerExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت مبادلات بازیکن وجود داشت.',
    },
  }
);

export const buyExchangeAction = createAsyncThunkApi(
  'exchange/buyExchangeAction',
  Apis.POST,
  playerExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت مبادلات بازیکن وجود داشت.',
    },
  }
);

const initialState = {
  allExchanges: [],
  playerExchanges: [],
};

const isFetching = (state) => {
  state.isFetching = true;
};

const isNotFetching = (state) => {
  state.isFetching = false;
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAllExchangesAction.pending.toString()]: isFetching,
    [getAllExchangesAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.allExchanges = response;
      state.isFetching = false;
    },
    [getAllExchangesAction.rejected.toString()]: isNotFetching,


    [getPlayerExchangesAction.pending.toString()]: isFetching,
    [getPlayerExchangesAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.playerExchanges = response;
      state.isFetching = false;
    },
    [getPlayerExchangesAction.rejected.toString()]: isNotFetching,


    // [getUserNotificationsAction.pending.toString()]: isFetching,
    // [getUserNotificationsAction.fulfilled.toString()]: (state, { payload: { response } }) => {
    //   state.notifications = response;
    //   state.isFetching = false;
    // },
    // [getUserNotificationsAction.rejected.toString()]: isNotFetching,


    // [markNotificationAsSeenAction.pending.toString()]: isFetching,
    // [markNotificationAsSeenAction.fulfilled.toString()]: (state, action) => {
    //   const newNotifications = [...state.notifications];
    //   for (let i = 0; i < newNotifications.length; i++) {
    //     if (newNotifications[i].id == action.meta.arg.notification) {
    //       newNotifications.splice(i, 1);
    //     }
    //   }
    //   state.notifications = newNotifications;
    //   state.isFetching = false;
    // },
    // [markNotificationAsSeenAction.rejected.toString()]: isNotFetching,


  },
});

export const { reducer: exchangeReducer } = accountSlice;
