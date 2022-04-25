import { Fields } from 'components/Inputs/InputTypes';

export const SortOptions = {
  'best seller': 'BEST_SELLER',
  'distance from landmark': 'DISTANCE_FROM_LANDMARK',
  'guest rating': 'GUEST_RATING',
  'price highest first': 'PRICE_HIGHEST_FIRST',
  price: 'PRICE',
};

export type FilterData = {
  pageSize: string;
  rating: string;
  sortOrder: typeof SortOptions[keyof typeof SortOptions];
};

export const defaultFilters: FilterData = {
  pageSize: '24',
  rating: '',
  sortOrder: SortOptions.price,
};

export const inputFields: Fields<HTMLInputElement | HTMLSelectElement, FilterData> = {
  pageSize: {
    id: 'pageSize',
    type: 'number',
    labelText: 'Cards per page',
    max: 25,
    min: 1,
  },
  rating: {
    id: 'rating',
    type: 'number',
    labelText: 'Hotel rating',
    min: 1,
    max: 5,
  },
  sortOrder: {
    id: 'sortOrder',
    labelText: 'Sort by',
    type: 'select',
    options: ['PRICE', ...Object.keys(SortOptions)],
    values: ['PRICE', ...Object.values(SortOptions)],
  },
};
