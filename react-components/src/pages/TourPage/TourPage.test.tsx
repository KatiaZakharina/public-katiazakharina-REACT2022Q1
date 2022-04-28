import '@testing-library/jest-dom';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';

import { HandlersFactory } from 'services/__mocks__/hotelAPI';
import { customRender } from 'test/__mocks__/customRender';
import App from 'App';

describe('TourPage', () => {
  describe('with correct API response', () => {
    const correctHandlers = new HandlersFactory([
      { handler: 'hotelDetailsResponse', status: 200 },
      { handler: 'hotelImageResponse', status: 200 },
    ]).handlers;
    const server = setupServer(...correctHandlers);

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('displays hotel details', async () => {
      const tourId = '12345';
      const { asFragment } = customRender(<App />, `/tours/${tourId}`);
      expect(screen.getByTestId('tour_details')).toBeInTheDocument();

      await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('with error details API response', () => {
    const consoleErrorFn = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    const errorCode = 500;
    const emptyHandlers = new HandlersFactory([
      { handler: 'hotelDetailsResponse', status: errorCode },
      { handler: 'hotelImageResponse', status: errorCode },
    ]).handlers;

    const server = setupServer(...emptyHandlers);

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => {
      server.close();
      consoleErrorFn.mockRestore();
    });

    it('displays error message', async () => {
      const tourId = '12345';
      const { asFragment } = customRender(<App />, `/tours/${tourId}`);
      expect(screen.getByTestId('tour_details')).toBeInTheDocument();

      await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'));

      expect(asFragment()).toMatchSnapshot();
      expect(consoleErrorFn).toHaveBeenCalled();
    });
  });
});
