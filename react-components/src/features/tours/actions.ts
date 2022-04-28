import { createAction } from '@reduxjs/toolkit';

import { TourData } from 'services/ToursDataType';
import { FilterData } from './types';

export const CHANGE_SEARCH = 'NEW_SEARCH';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const CHANGE_TOURS = 'CHANGE_TOURS';

export const changeSearch = createAction<string, typeof CHANGE_SEARCH>(CHANGE_SEARCH);
export const changeFilters = createAction<FilterData, typeof CHANGE_FILTERS>(CHANGE_FILTERS);
export const setTotalPages = createAction<number, typeof SET_TOTAL_PAGES>(SET_TOTAL_PAGES);
export const setCurrentPage = createAction<number, typeof SET_CURRENT_PAGE>(SET_CURRENT_PAGE);
export const changeTours = createAction<TourData[], typeof CHANGE_TOURS>(CHANGE_TOURS);
