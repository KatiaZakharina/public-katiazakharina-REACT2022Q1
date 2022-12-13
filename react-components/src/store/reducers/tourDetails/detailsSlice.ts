import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RequestErrorType, TourDetailsType } from 'services/types';
import service, { RequestError } from 'services/TourService';
import { DetailsState } from './types';
import { RootState } from 'store/store';

const initialState: DetailsState = {
  id: null,
  details: null,
  needToLoad: true,
  loading: true,
  error: null,
};

export const fetchDetails = createAsyncThunk<
  TourDetailsType | null,
  void,
  { rejectValue: RequestErrorType }
>('details/fetchDetails', async (_, { rejectWithValue, getState }) => {
  const { needToLoad, id } = (getState() as RootState).detailsReducer;

  if (!id) return null;

  if (!needToLoad) {
    const appLocalStorage = localStorage.getItem('app');
    const localRootState = appLocalStorage ? (JSON.parse(appLocalStorage) as RootState) : null;

    return localRootState?.detailsReducer?.details || null;
  }
  try {
    const data = await service.getTourDetails(id);
    return data;
  } catch (error) {
    if (error instanceof RequestError || error instanceof Error) {
      return rejectWithValue(error);
    } else {
      return rejectWithValue(new Error('Failed to load hotel description'));
    }
  }
});

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setHotelId: (state, { payload }) => {
      if (state.id !== payload) {
        state.needToLoad = true;
      }

      state.id = payload;
    },
    disableNeedToLoad: (state) => {
      state.needToLoad = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetails.fulfilled, (state, { payload }) => {
        state.details = payload;
        state.loading = false;
      })
      .addCase(fetchDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.details = null;
        state.error = payload || null;
      });
  },
});

export const { disableNeedToLoad, setHotelId } = detailsSlice.actions;

export default detailsSlice.reducer;
