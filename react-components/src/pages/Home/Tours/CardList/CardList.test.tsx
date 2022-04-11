import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';

import { CardList } from './CardList';
import { HandlersFactory } from 'services/__mocks__/hotelAPI';
import { fakeToursData } from './__mock__/fakeToursData';

describe('CardList', () => {
  it('renders Cards', () => {
    render(<CardList data={fakeToursData} />);

    expect(screen.getAllByTestId('tour_card')).toHaveLength(fakeToursData.length);
  });

  it('does not have a modal open by default', () => {
    render(<CardList data={fakeToursData} />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});

describe('Click on card', () => {
  it('renders modal', () => {
    render(<CardList data={fakeToursData} />);

    userEvent.click(screen.getAllByTestId('tour_card')[0]);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  it('close modal by click', () => {
    render(<CardList data={fakeToursData} />);

    userEvent.click(screen.getAllByTestId('tour_card')[0]);
    expect(screen.queryByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByText('×');
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

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
      render(<CardList data={fakeToursData} />);

      userEvent.click(screen.getAllByTestId('tour_card')[0]);

      await waitForElementToBeRemoved(screen.getByTestId('preloader'));

      expect(await screen.findByTestId('tour_details')).toBeInTheDocument();
    });
  });

  describe('with error details API response', () => {
    const errorCode = 500;
    const emptyHandlers = new HandlersFactory([
      { handler: 'hotelDetailsResponse', status: errorCode },
      { handler: 'hotelImageResponse', status: errorCode },
    ]).handlers;

    const server = setupServer(...emptyHandlers);

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('displays error message', async () => {
      const consoleErrorFn = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

      render(<CardList data={fakeToursData} />);

      userEvent.click(screen.getAllByTestId('tour_card')[0]);

      await waitForElementToBeRemoved(screen.getByTestId('preloader'));

      expect(await screen.findByText(`ERROR CODE: ${errorCode}`)).toBeInTheDocument();
      expect(screen.queryByTestId('tour_details')).not.toBeInTheDocument();

      expect(consoleErrorFn).toHaveBeenCalled();
      consoleErrorFn.mockRestore();
    });
  });
});
