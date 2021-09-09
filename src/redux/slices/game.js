import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  allExchangesUrl,
  createNewExchangesUrl,
  playerExchangesUrl,
} from '../constants/urls';

export const requestProblemAction = createAsyncThunkApi(
  'problem/requestProblemAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در درخواستِ مسئله وجود داشت.',
    },
  }
);


export const getProblemAction = createAsyncThunkApi(
  'problem/getProblemAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت مسئله وجود داشت.',
    },
  }
);

export const submitAnswerAction = createAsyncThunkApi(
  'problem/submitAnswerAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      success: 'پاسخ شما با موفقیت ثبت شد!',
      error: 'مشکلی در ارسال پاسخ وجود داشت.',
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
  name: 'problem',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getProblemAction.pending.toString()]: isFetching,
    [getProblemAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.problem = response;
      state.isFetching = false;
    },
    [getProblemAction.rejected.toString()]: isNotFetching,


    [submitAnswerAction.pending.toString()]: isFetching,
    [submitAnswerAction.fulfilled.toString()]: isNotFetching,
    [submitAnswerAction.rejected.toString()]: isNotFetching,

  },
});

export const { reducer: gameReducer } = accountSlice;
