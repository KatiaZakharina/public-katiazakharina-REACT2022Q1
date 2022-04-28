import { createAction } from '@reduxjs/toolkit';

import { TourFormData } from './types';

export const ADD_REQUEST = 'ADD_REQUEST';

export const addRequest = createAction<TourFormData[], typeof ADD_REQUEST>(ADD_REQUEST);
