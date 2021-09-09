import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  getPlayerUrl,
  loginUrl,
  userNotificationsUrl,
} from '../constants/urls';

export const loginAction = createAsyncThunkApi(
  'users/loginAction',
  Apis.POST,
  loginUrl,
  {
    defaultNotification: {
      success: 'دوباره سلام!',
      error: 'نام کاربری یا رمز عبورت اشتباهه!',
    },
  }
);

export const getPlayerAction = createAsyncThunkApi(
  'users/getPlayerAction',
  Apis.GET,
  getPlayerUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت مشخصات بازیکن وجود داشت.',
    },
  }
);


export const getUserNotificationsAction = createAsyncThunkApi(
  'users/getUserNotificationsAction',
  Apis.GET,
  userNotificationsUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت اعلان‌های کاربر وجود داشت.',
    },
  }
);

export const markNotificationAsSeenAction = createAsyncThunkApi(
  'users/markNotificationAsSeenAction',
  Apis.POST,
  userNotificationsUrl,
  {
    defaultNotification: {
      error: 'مشکلی در علامت‌گذاری اعلان وجود داشت.',
    },
  }
);


const initialState = {
  token: null,
  user: {},
  notifications: [],
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
    logout: () => initialState,
  },
  extraReducers: {
    [loginAction.pending.toString()]: isFetching,
    [loginAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.user = response.user_info;
      state.token = response.access;
      state.isFetching = false;
    },
    [loginAction.rejected.toString()]: isNotFetching,


    [getPlayerAction.pending.toString()]: isFetching,
    [getPlayerAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.player = response;
      state.isFetching = false;
    },
    [getPlayerAction.rejected.toString()]: isNotFetching,


    [getUserNotificationsAction.pending.toString()]: isFetching,
    [getUserNotificationsAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      state.notifications = response;
      state.isFetching = false;
    },
    [getUserNotificationsAction.rejected.toString()]: isNotFetching,


    [markNotificationAsSeenAction.pending.toString()]: isFetching,
    [markNotificationAsSeenAction.fulfilled.toString()]: (state, action) => {
      const newNotifications = [...state.notifications];
      for (let i = 0; i < newNotifications.length; i++) {
        if (newNotifications[i].id == action.meta.arg.notification) {
          newNotifications.splice(i, 1);
        }
      }
      state.notifications = newNotifications;
      state.isFetching = false;
    },
    [markNotificationAsSeenAction.rejected.toString()]: isNotFetching,


  },
});

export const { logout: logoutAction } = accountSlice.actions;

export const { reducer: accountReducer } = accountSlice;
