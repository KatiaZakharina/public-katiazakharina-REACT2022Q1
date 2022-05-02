import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';

import { Tours } from './Tours';
import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { hotels, locationSearchAPIData } from 'services/__mocks__/fakeData';
import { HandlersFactory } from 'services/__mocks__/hotelAPI';
import { mockAxiosGet } from 'services/__mocks__/axiosMock';
import { customRender } from 'test/__mocks__/customRender';

describe('Tours', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  describe('with correct API response', () => {
    const correctHandlers = new HandlersFactory([
      { handler: 'locationIdResponse', status: 200 },
      { handler: 'hotelsResponse', status: 200 },
    ]).handlers;

    const server = setupServer(...correctHandlers);

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('renders Search', async () => {
      customRender(<Tours />);

      const search = await screen.findByRole('textbox');
      const searchButton = await screen.findByRole('button');

      expect(search).toBeInTheDocument();
      expect(searchButton).toBeDisabled();

      await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));
      expect(searchButton).not.toBeDisabled();
    });

    it('renders preloader', async () => {
      customRender(<Tours />);

      expect(await screen.findByTestId('preloader')).toBeInTheDocument();
      expect(await screen.findByTestId('tour_cards')).toBeInTheDocument();
      expect(screen.queryByTestId('preloader')).not.toBeInTheDocument();
    });

    it('renders cards if the search query is empty', async () => {
      customRender(<Tours />);

      userEvent.clear(await screen.findByRole('textbox'));
      expect(await screen.findByRole('textbox')).toHaveValue('');
      expect(await screen.findAllByTestId('tour_card')).toHaveLength(hotels.length);
    });
  });

  describe('with empty location API response', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
      });
    });

    afterEach(() => {
      window.localStorage.clear();
    });

    const emptyLocationHandlers = new HandlersFactory([
      { handler: 'locationIdResponse', status: 204 },
      { handler: 'hotelsResponse', status: 204 },
    ]).handlers;

    const emptyLocationServer = setupServer(...emptyLocationHandlers);

    beforeAll(() => emptyLocationServer.listen());
    afterEach(() => emptyLocationServer.resetHandlers());
    afterAll(() => emptyLocationServer.close());

    it('shows empty search error message', async () => {
      const searchQuery = 'Abcd';
      window.localStorage.setItem('tours_search', searchQuery);

      customRender(<Tours />);

      await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

      expect(screen.queryAllByTestId('tour_card')).toHaveLength(0);
      expect(await screen.findByText('Your search did not match any tours')).toBeInTheDocument();
    });
  });

  describe('with error location API response', () => {
    const errorCode = 404;

    const errorLocationHandlers = new HandlersFactory([
      { handler: 'locationIdResponse', status: errorCode },
      { handler: 'hotelsResponse', status: errorCode },
    ]).handlers;

    const errorLocationServer = setupServer(...errorLocationHandlers);

    beforeAll(() => errorLocationServer.listen());
    afterEach(() => errorLocationServer.resetHandlers());
    afterAll(() => {
      errorLocationServer.close();
    });

    it('shows error  error message', async () => {
      customRender(<Tours />);

      await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

      expect(await screen.findByText(`ERROR CODE: ${errorCode}`)).toBeInTheDocument();
    });
  });
});

describe('Event', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it.skip('type query and search button click start search', async () => {
    const axiosMock = mockAxiosGet(locationSearchAPIData);
    const query = 'Italy';

    customRender(<Tours />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

    const search = (await screen.findByRole('textbox')) as HTMLInputElement;
    userEvent.clear(search);
    userEvent.type(search, query);

    await waitFor(async () => {
      userEvent.click(await screen.findByRole('button'));
    });

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/locations/v2/search?query=${query}&locale=en_US&currency=USD`
    );
  });

  it.skip('enter click start search', async () => {
    const axiosMock = mockAxiosGet(locationSearchAPIData);
    const query = 'Spain';

    customRender(<Tours />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

    const search = (await screen.findByRole('textbox')) as HTMLInputElement;
    search.value = '';
    userEvent.type(search, query);

    await waitFor(async () => {
      userEvent.keyboard('{Enter}');
    });

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/locations/v2/search?query=${query}&locale=en_US&currency=USD`
    );
  });
});
