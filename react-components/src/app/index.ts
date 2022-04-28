import { combineReducers } from '@reduxjs/toolkit';

import { requestsReducer } from 'features/requests/reducer';
import { toursReducer } from 'features/tours/reducer';

export const rootReducer = combineReducers({
  toursReducer,
  requestsReducer,
});
