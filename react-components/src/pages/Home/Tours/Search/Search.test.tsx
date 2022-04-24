import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { renderWithContext } from 'test/__mocks__/renders';
import { Search } from './Search';

describe('Search with empty value', () => {
  it('should render correctly', () => {
    renderWithContext(<Search disabled={false} />);

    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeDisabled;
  });

  it('should be disabled if disabled props is true', () => {
    renderWithContext(<Search disabled={true} />);

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('textbox')).toBeDisabled;
  });
});

describe('Search query', () => {
  const searchQuery = 'Hotel';

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
    window.localStorage.setItem('tours_search', searchQuery);
  });

  afterAll(() => {
    window.localStorage.clear();
  });

  it.skip('should be initialized with a local storage value', () => {
    renderWithContext(<Search disabled={false} />);

    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(searchQuery)).toBeInTheDocument();
    expect(window.localStorage.getItem('tours_search')).toBe(searchQuery);
  });
});

describe('Event', () => {
  const typeQuery = (search: HTMLInputElement, searchQuery: string) => {
    search.value = '';
    userEvent.type(search, searchQuery);
  };

  it('change query should work correctly', () => {
    const searchQuery = 'Hotel';

    renderWithContext(<Search disabled={false} />);

    const search = screen.getByRole('textbox') as HTMLInputElement;
    typeQuery(search, searchQuery);
    expect(search.value).toBe(searchQuery);
  });
});
