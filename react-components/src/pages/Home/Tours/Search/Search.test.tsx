import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { customRender } from 'test/__mocks__/customRender';
import { Search } from './Search';

describe('Search with empty value', () => {
  it('should render correctly', () => {
    customRender(<Search disabled={false} />);

    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue('France')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeDisabled;
  });

  it('should be disabled if disabled props is true', () => {
    customRender(<Search disabled={true} />);

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('textbox')).toBeDisabled;
  });
});

describe('Search query', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterAll(() => {
    window.localStorage.clear();
  });

  it.skip('should be initialized with a local storage value', () => {
    const searchQuery = 'Hotel';

    const localData = {
      toursReducer: {
        searchValue: searchQuery,
      },
    };
    window.localStorage.setItem('app', JSON.stringify(localData));

    customRender(<Search disabled={false} />);

    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(searchQuery)).toBeInTheDocument();
    expect(window.localStorage.getItem('app')).toBe(searchQuery);
  });
});

describe('Event', () => {
  const typeQuery = (search: HTMLInputElement, searchQuery: string) => {
    search.value = '';
    userEvent.type(search, searchQuery);
  };

  it('change query should work correctly', () => {
    const searchQuery = 'Hotel';

    customRender(<Search disabled={false} />);

    const search = screen.getByRole('textbox') as HTMLInputElement;
    typeQuery(search, searchQuery);
    expect(search.value).toBe(searchQuery);
  });
});
