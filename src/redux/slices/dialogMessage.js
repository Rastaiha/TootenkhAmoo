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
  name: 'dialogMessage',
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

  },
});

export const { reducer: dialogMessageReducer } = accountSlice;
