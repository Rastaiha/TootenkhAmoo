import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  allExchangesUrl,
  createNewExchangesUrl,
  playerExchangesUrl,
} from '../constants/urls';

export const getAllFamousPersonsAction = createAsyncThunkApi(
  'game/getAllFamousPersonsAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در گرفتن افراد مشهور وجود داشت.',
    },
  }
);


export const getAllCheckableObjectsAction = createAsyncThunkApi(
  'game/getAllCheckableObjectsAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت اشیای چک‌شدنی وجود داشت.',
    },
  }
);


export const checkAnObjectAction = createAsyncThunkApi(
  'game/checkAnObjectAction',
  Apis.GET,
  allExchangesUrl,
  {
    defaultNotification: {
      error: 'مشکلی در چک‌کردن اشیا وجود داشت.',
    },
  }
);

const initialState = {
  allFamousPersons: [],
  allCheckableObjects: [],
};

const isFetching = (state) => {
  state.isFetching = true;
};

const isNotFetching = (state) => {
  state.isFetching = false;
};

const accountSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAllFamousPersonsAction.pending.toString()]: isFetching,
    [getAllFamousPersonsAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.allFamousPersons = response;
      state.isFetching = false;
    },
    [getAllFamousPersonsAction.rejected.toString()]: isNotFetching,


    [getAllCheckableObjectsAction.pending.toString()]: isFetching,
    [getAllCheckableObjectsAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.allCheckableObjects = response;
      state.isFetching = false;
    },
    [getAllCheckableObjectsAction.rejected.toString()]: isNotFetching,

  },
});

export const { reducer: gameReducer } = accountSlice;
