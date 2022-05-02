import { createReducer } from '@reduxjs/toolkit';

import { RequestsState } from './types';
import { ADD_REQUEST } from './actions';

const defaultState: RequestsState = { requests: [] };

export const requestsReducer = createReducer(defaultState, {
  [ADD_REQUEST]: (state, { payload }) => {
    state.requests = payload;
  },
});
