import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BookTour } from './BookTour';
import { fillInputs, getInputs, validData } from './Form/Form.test';
import { fakeLocalStorage } from 'test/__mocks__/fakeLocalStorage ';
import { requests } from './RequestList/RequestList.test';

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
    render(<BookTour />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Requests List')).toBeInTheDocument();
  });

  it('renders RequestList from localStorage', () => {
    window.localStorage.setItem('tour_requests', JSON.stringify(requests));

    render(<BookTour />);

    expect(screen.getAllByTestId('request_card')).toHaveLength(requests.length);
  });

  describe('Form submit', () => {
    it('renders new RequestCard', () => {
      const { container } = render(<BookTour />);
      const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

      const inputs = getInputs(container);
      fillInputs(validData, inputs);

      expect(screen.queryByTestId('request_card')).toBeNull();

      userEvent.click(submitButton);

      expect(screen.getAllByTestId('request_card')).toHaveLength(1);
    });

    it('saves data in localStorage after unmounting', () => {
      const { container, unmount } = render(<BookTour />);
      const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

      const inputs = getInputs(container);
      fillInputs(validData, inputs);

      expect(window.localStorage.getItem('tour_requests')).toBeNull();

      userEvent.click(submitButton);

      unmount();

      expect(window.localStorage.getItem('tour_requests')).toBe(
        JSON.stringify([{ ...validData, pcr: '' }])
      );
    });
  });
});
