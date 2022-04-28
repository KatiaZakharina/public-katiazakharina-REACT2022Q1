import { TourData } from 'services/ToursDataType';

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

type Pagination = { current: number; total: number };

export type TourState = {
  searchValue: string;
  filters: FilterData;
  pagination: Pagination;
  tours: TourData[];
};
