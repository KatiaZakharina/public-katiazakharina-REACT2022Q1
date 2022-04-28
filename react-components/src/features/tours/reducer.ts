import { createReducer } from '@reduxjs/toolkit';

import {
  CHANGE_SEARCH,
  CHANGE_FILTERS,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  CHANGE_TOURS,
} from './actions';
import { SortOptions, TourState } from './types';

const defaultState: TourState = {
  searchValue: '',
  filters: {
    pageSize: '24',
    rating: '',
    sortOrder: SortOptions.price,
  },
  pagination: { current: 1, total: 1 },
  tours: [],
};

export const toursReducer = createReducer(defaultState, {
  [CHANGE_SEARCH]: (state, { payload }) => {
    state.searchValue = payload;
  },
  [CHANGE_FILTERS]: (state, { payload }) => {
    state.filters = payload;
  },
  [SET_TOTAL_PAGES]: (state, { payload }) => {
    state.pagination.total = payload;
  },
  [SET_CURRENT_PAGE]: (state, { payload }) => {
    state.pagination.current = payload;
  },
  [CHANGE_TOURS]: (state, { payload }) => {
    state.tours = payload;
  },
});
