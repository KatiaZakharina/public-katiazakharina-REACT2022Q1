import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestErrorType } from 'services/types';
import { FetchToursReturn, FilterData, SortOptions, TourState } from './types';
import service, { RequestError } from 'services/TourService';
import { RootState } from 'store/store';

const initialState: TourState = {
  searchValue: 'France',
  filters: {
    pageSize: '24',
    rating: '',
    sortOrder: SortOptions.price,
  },
  pagination: { current: 1, total: 1 },
  tours: [],
  needToLoad: true,
  error: null,
  loading: true,
};

export const fetchTours = createAsyncThunk<
  FetchToursReturn,
  void,
  { rejectValue: RequestErrorType }
>('tours/fetchTours', async (_, { rejectWithValue, getState }) => {
  const {
    searchValue,
    filters,
    pagination: { current },
    needToLoad,
  } = (getState() as RootState).toursReducer;

  if (!needToLoad) {
    const appLocalStorage = localStorage.getItem('app');
    const localRootState = appLocalStorage ? (JSON.parse(appLocalStorage) as RootState) : null;

    return {
      data: localRootState?.toursReducer?.tours || [],
      total: localRootState?.toursReducer?.pagination?.total ?? 1,
    };
  }

  try {
    const toursInfo = await service.getBriefToursInfo(searchValue, filters, current);
    return toursInfo;
  } catch (error) {
    if (error instanceof RequestError || error instanceof Error) {
      return rejectWithValue(error);
    } else {
      return rejectWithValue(new Error('Failed to load hotels'));
    }
  }
});

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    changeSearch: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
      state.needToLoad = true;
    },
    changeFilters: (state, { payload }: PayloadAction<FilterData>) => {
      state.filters = payload;
      state.needToLoad = true;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.pagination.current = payload;
      state.needToLoad = true;
    },
    disableNeedToLoad: (state) => {
      state.needToLoad = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, { payload }) => {
        state.tours = payload.data;
        state.pagination.total = payload.total;
        state.loading = false;
      })
      .addCase(fetchTours.rejected, (state, { payload }) => {
        state.loading = false;
        state.tours = [];
        state.error = payload || null;
      });
  },
});

export const { changeSearch, changeFilters, setCurrentPage, disableNeedToLoad } =
  toursSlice.actions;

export default toursSlice.reducer;
