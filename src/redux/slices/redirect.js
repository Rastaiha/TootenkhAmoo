import { createSlice } from '@reduxjs/toolkit';

import { getProblemFromGroupAction } from './problem';

const initialState = { redirectTo: null, force: false };

const redirectSlice = createSlice({
  name: 'redirect',
  initialState,
  reducers: {
    initRedirect: () => initialState,
  },
  extraReducers: {
    [getProblemFromGroupAction.fulfilled.toString()]: (state, action) => {
      return {
        redirectTo: `/problem/${action?.meta?.arg.groupProblemId}/${action.payload.response.submit.id}/${action.payload.response.problem.id}/`,
      };
    },
  }
});

export const { initRedirect: initRedirectAction } = redirectSlice.actions;

export const { reducer: redirectReducer } = redirectSlice;
