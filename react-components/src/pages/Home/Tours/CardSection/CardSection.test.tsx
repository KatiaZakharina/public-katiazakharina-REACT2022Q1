import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { CardSection } from './CardSection';

const data = [
  {
    id: 'a5d323b1-374c-4b7e-bd13-984f5236e0ff',
    accommodation: 'Whiskey Bravo Lima Hotel',
    rating: 5,
    city: 'Ribnica na Pohorju',
    country: 'Romania',
    img: 'img1.jpg',
    price: 1000,
    duration: 7,
  },
  {
    id: '9950d32b-33cb-4278-8c3c-124d341145ea',
    accommodation: 'Hotel Tango Resort',
    rating: 4,
    city: 'Pokrovo-Prigorodnoye',
    country: 'Turkey',
    img: 'img2.jpg',
    price: 2000,
    duration: 14,
  },
  {
    id: '14b88311-1b54-414c-9da0-2b9d4217927c',
    accommodation: 'Uniform Echo Resort',
    rating: 5,
    city: 'Jiuchi',
    country: 'Turkey',
    img: 'img5.jpg',
    price: 2000,
    duration: 20,
  },
];

describe('CardSection', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('renders Search', () => {
    render(<CardSection data={data} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders all cards if the search query is empty', () => {
    render(<CardSection data={data} />);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getAllByTestId('tour_card')).toHaveLength(data.length);
  });

  it('show info if search did not match any tours', () => {
    const searchQuery = 'Abcd';

    window.localStorage.setItem('tours_search', searchQuery);

    render(<CardSection data={data} />);

    expect(screen.queryAllByTestId('tour_card')).toHaveLength(0);
    expect(screen.getByText('Your search did not match any tours.')).toBeInTheDocument();
    expect(window.localStorage.getItem('tours_search')).toBe(searchQuery);
  });
});

describe('CardSection cards', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  test('are rendered by country query', () => {
    const searchQuery = 'Turkey';
    const matchNum = 2;

    window.localStorage.setItem('tours_search', searchQuery);

    render(<CardSection data={data} />);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });

  test('are rendered by accommodation query', () => {
    const searchQuery = 'Lima Hotel';
    const matchNum = 1;

    window.localStorage.setItem('tours_search', searchQuery);

    render(<CardSection data={data} />);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });

  test('are rendered by city query', () => {
    const searchQuery = 'Jiuchi';
    const matchNum = 1;

    window.localStorage.setItem('tours_search', searchQuery);

    render(<CardSection data={data} />);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });

  it('are rendered by partial query', () => {
    const searchQuery = 'Resor';
    const matchNum = 2;

    window.localStorage.setItem('tours_search', searchQuery);

    render(<CardSection data={data} />);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });
});

describe('Event', () => {
  const typeQuery = (search: HTMLInputElement, searchQuery: string) => {
    search.value = '';

    userEvent.type(search, searchQuery);
  };

  it('type query and search button click start search', () => {
    render(<CardSection data={data} />);

    const search = screen.getByRole('textbox') as HTMLInputElement;
    const matchNum = 1;

    typeQuery(search, 'Ribnica');

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });

  it('enter click start search', () => {
    render(<CardSection data={data} />);

    const search = screen.getByRole('textbox') as HTMLInputElement;
    const matchNum = 1;

    typeQuery(search, 'Ribnica');

    userEvent.keyboard('{Enter}');

    expect(screen.getAllByTestId('tour_card')).toHaveLength(matchNum);
  });
});
