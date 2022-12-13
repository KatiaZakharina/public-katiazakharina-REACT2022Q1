import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SortOptions } from 'store/reducers/tours/types';
import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { customRender } from 'test/__mocks__/customRender';
import { FilterPanel } from './FilterPanel';

describe('FilterPanel', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders correctly with default values', () => {
    const { asFragment } = customRender(<FilterPanel />);

    expect(asFragment()).toMatchSnapshot();
  });

  it.skip('renders correctly with localStorage values', () => {
    const filtersData = { pageSize: 12, rating: 5, sortOrder: SortOptions['guest rating'] };
    const localData = {
      toursReducer: {
        filters: filtersData,
      },
    };
    window.localStorage.setItem('app', JSON.stringify(localData));

    customRender(<FilterPanel />);

    expect(screen.getByRole('form')).toHaveFormValues(filtersData);
  });

  it.skip('change value and set data in localStorage', async () => {
    const filters = { pageSize: 12, rating: 5, sortOrder: SortOptions['guest rating'] };
    const localStorageFilters = {
      pageSize: '12',
      rating: '5',
      sortOrder: SortOptions['guest rating'],
    };

    customRender(<FilterPanel />);

    const cardPerPage = screen.getByRole('spinbutton', { name: 'Cards per page' });
    const rating = screen.getByRole('spinbutton', { name: 'Hotel rating' });
    const sort = screen.getByRole('combobox', { name: 'Sort by' });

    userEvent.clear(cardPerPage);
    userEvent.clear(rating);

    userEvent.type(cardPerPage, filters.pageSize.toString());
    userEvent.type(rating, filters.rating.toString());
    userEvent.selectOptions(sort, filters.sortOrder);

    expect(screen.getByRole('form')).toHaveFormValues(filters);

    const localData = JSON.parse(window.localStorage.getItem('app') || '');
    expect(localData?.toursReducer?.filters).toStrictEqual(localStorageFilters);
  });
});
