import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { fakeLocalStorage } from '__mocks__/fakeLocalStorage ';
import { Search } from './Search';

describe('Search with empty value', () => {
  it('should render correctly', () => {
    const onUpdateSearch = jest.fn();

    render(<Search onUpdateSearch={onUpdateSearch} />);

    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });
});

describe('Search query', () => {
  const searchQuery = 'Hotel';
  const onUpdateSearch = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
    window.localStorage.setItem('tours_search', searchQuery);
  });

  afterAll(() => {
    window.localStorage.clear();
  });

  it('should be initialized with a local storage value', () => {
    render(<Search onUpdateSearch={onUpdateSearch} />);

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
    const onUpdateSearch = jest.fn();

    render(<Search onUpdateSearch={onUpdateSearch} />);
    const search = screen.getByRole('textbox') as HTMLInputElement;

    typeQuery(search, searchQuery);
    expect(search.value).toBe(searchQuery);
  });

  it('search button click run onUpdateSearch', () => {
    const onUpdateSearch = jest.fn();

    render(<Search onUpdateSearch={onUpdateSearch} />);

    const search = screen.getByRole('textbox') as HTMLInputElement;
    const searchQuery = 'Ribnica';

    typeQuery(search, searchQuery);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onUpdateSearch).toHaveBeenCalledWith(searchQuery);
  });
});
