import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { renderWithContext } from 'test/__mocks__/renders';
import { SortOptions } from './FilterFields';
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
    const { asFragment } = renderWithContext(<FilterPanel />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with localStorage values', () => {
    const filters = { pageSize: 12, rating: 5, sortOrder: SortOptions['guest rating'] };
    window.localStorage.setItem('tour_filters', JSON.stringify(filters));

    renderWithContext(<FilterPanel />);

    expect(screen.getByRole('form')).toHaveFormValues(filters);
  });

  it('change value and set data in localStorage', async () => {
    const filters = { pageSize: 12, rating: 5, sortOrder: SortOptions['guest rating'] };
    const localStorageFilters = {
      pageSize: '12',
      rating: '5',
      sortOrder: SortOptions['guest rating'],
    };

    renderWithContext(<FilterPanel />);

    const cardPerPage = screen.getByRole('spinbutton', { name: 'Cards per page' });
    const rating = screen.getByRole('spinbutton', { name: 'Hotel rating' });
    const sort = screen.getByRole('combobox', { name: 'Sort by' });

    userEvent.clear(cardPerPage);
    userEvent.clear(rating);

    userEvent.type(cardPerPage, filters.pageSize.toString());
    userEvent.type(rating, filters.rating.toString());
    userEvent.selectOptions(sort, filters.sortOrder);

    expect(screen.getByRole('form')).toHaveFormValues(filters);
    expect(localStorage.getItem('tour_filters')).toBe(JSON.stringify(localStorageFilters));
  });
});
