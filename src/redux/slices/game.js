import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  allExchangesUrl,
  checkObjectsUrl,
  getAllCheckableObjectsUrl,
  getPlayerCheckableObjectsUrl,
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

export const getPlayerCheckableObjectsAction = createAsyncThunkApi(
  'game/getPlayerCheckableObjectsAction',
  Apis.GET,
  getPlayerCheckableObjectsUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت اشیای چک‌شدنی وجود داشت.',
    },
  }
);


export const getAllCheckableObjectsAction = createAsyncThunkApi(
  'game/getAllCheckableObjectsAction',
  Apis.GET,
  getAllCheckableObjectsUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت اشیای چک‌شدنی وجود داشت.',
    },
  }
);

export const checkAnObjectAction = createAsyncThunkApi(
  'game/checkAnObjectAction',
  Apis.POST,
  checkObjectsUrl,
  {
    defaultNotification: {
      success: 'شی مورد نظر با موفقیت بررسی شد!',
      error: 'مشکلی در چک‌کردن اشیا وجود داشت.',
    },
  }
);

const initialState = {
  allFamousPersons: [],
  allCheckableObjects: [],
  playerCheckableObjects: [],
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


    [getPlayerCheckableObjectsAction.pending.toString()]: isFetching,
    [getPlayerCheckableObjectsAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.playerCheckableObjects = response;
      state.isFetching = false;
    },
    [getPlayerCheckableObjectsAction.rejected.toString()]: isNotFetching,


    [checkAnObjectAction.pending.toString()]: isFetching,
    [checkAnObjectAction.fulfilled.toString()]: (state, action) => {
      const newAllCheckableObjects = [...state.allCheckableObjects];
      console.log(action)
      for (let i = 0; i < newAllCheckableObjects.length; i++) {
        if (newAllCheckableObjects[i].id == action.meta.arg.checkableObjectId) {
          newAllCheckableObjects.splice(i, 1);
        }
      }
      state.allCheckableObjects = newAllCheckableObjects;
      state.isFetching = false;
    },
    [checkAnObjectAction.rejected.toString()]: isNotFetching,

  },
});

export const { reducer: gameReducer } = accountSlice;
