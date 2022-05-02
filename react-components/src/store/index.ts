import { combineReducers } from '@reduxjs/toolkit';

import { requestsReducer } from 'store/reducers/requests/reducer';
import toursReducer from 'store/reducers/tours/tourSlice';
import detailsReducer from 'store/reducers/tourDetails/detailsSlice';

export const rootReducer = combineReducers({
  toursReducer,
  requestsReducer,
  detailsReducer,
});
