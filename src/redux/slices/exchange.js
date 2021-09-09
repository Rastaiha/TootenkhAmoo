import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  allExchangesUrl,
  createNewExchangesUrl,
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
      success: 'مبادله با موفقیت انجام شد!',
      error: 'مشکلی در دریافت مبادلات بازیکن وجود داشت.',
    },
  }
);

export const createNewExchangeAction = createAsyncThunkApi(
  'exchange/createNewExchangeAction',
  Apis.POST,
  createNewExchangesUrl,
  {
    defaultNotification: {
      success: 'مبادله با موفقیت ساخته شد!',
      error: 'مشکلی در ساخت مبادله وجود داشت.',
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
  name: 'exchange',
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


    [buyExchangeAction.pending.toString()]: isFetching,
    [buyExchangeAction.fulfilled.toString()]: (state, action) => {
      const newAllExchanges = [...state.allExchanges];
      for (let i = 0; i < newAllExchanges.length; i++) {
        if (newAllExchanges[i].id == action.meta.arg.exchange) {
          newAllExchanges.splice(i, 1);
        }
      }
      state.allExchanges = newAllExchanges;
      state.isFetching = false;
    },
    [buyExchangeAction.rejected.toString()]: isNotFetching,

  },
});

export const { reducer: exchangeReducer } = accountSlice;
