import { Fields } from 'components/Inputs/InputTypes';
import { FilterData, SortOptions } from 'store/reducers/tours/types';

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
