import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BookTour } from './BookTour';
import { fillInputs, getInputs } from './__mocks__/formMocks';
import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { requests } from './RequestList/RequestList.test';
import { validData } from './__mocks__/formData';
import { customRender } from 'test/__mocks__/customRender';

describe('BookTour', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders Form and RequestList', () => {
    customRender(<BookTour />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Requests List')).toBeInTheDocument();
  });

  it.skip('renders RequestList from localStorage', () => {
    window.localStorage.setItem('tour_requests', JSON.stringify(requests));

    customRender(<BookTour />);

    expect(screen.getAllByTestId('request_card')).toHaveLength(requests.length);
  });

  describe('Form submit', () => {
    it('renders new RequestCard', async () => {
      const { container } = customRender(<BookTour />);
      const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

      const inputs = getInputs(container);
      await waitFor(() => {
        fillInputs(validData, inputs);
      });

      expect(screen.queryByTestId('request_card')).toBeNull();

      await waitFor(() => {
        userEvent.click(submitButton);
      });

      expect(screen.getAllByTestId('request_card')).toHaveLength(1);
    });

    it.skip('saves data in localStorage after unmounting', async () => {
      const { container, unmount } = customRender(<BookTour />);
      const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

      const inputs = getInputs(container);
      await waitFor(() => {
        fillInputs(validData, inputs);
      });

      expect(window.localStorage.getItem('app')).toBeNull();

      await waitFor(() => {
        userEvent.click(submitButton);
      });

      unmount();

      const fileListMock = { 0: {}, length: 1 };

      const localData = JSON.parse(window.localStorage.getItem('app') || '');
      expect(localData?.requestsReducer?.requests).toStrictEqual([
        { ...validData, pcr: fileListMock },
      ]);
    });
  });
});
