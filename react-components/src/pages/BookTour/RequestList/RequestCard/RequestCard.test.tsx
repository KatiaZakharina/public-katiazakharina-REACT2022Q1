import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { RequestCard } from './RequestCard';
import { fakeImage } from 'pages/BookTour/__mocks__/formMocks';

describe('RequestCard', () => {
  const data = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    email: 'ivan@gmail.com',
    date: '2022-04-06',
    destination: 'France',
    withChildren: false,
    pcr: fakeImage,
    getNotification: false,
  };

  it('renders card', () => {
    render(<RequestCard data={data} />);
    expect(screen.getByTestId('request_card')).toBeInTheDocument();
  });

  it('displays full name', () => {
    render(<RequestCard data={data} />);

    const fullName = screen.getByRole('heading', {
      name: `${data.firstName} ${data.lastName}`,
    });

    expect(fullName).toBeInTheDocument();
  });

  it('renders info list', () => {
    render(<RequestCard data={data} />);

    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.getByText(data.email)).toBeInTheDocument();
    expect(screen.getByText(data.date)).toBeInTheDocument();
    expect(screen.getByText(data.destination)).toBeInTheDocument();
    expect(screen.getByText(/pcr is/)).toBeInTheDocument();
  });

  describe('renders labels info', () => {
    test('if data is false', () => {
      render(<RequestCard data={data} />);

      expect(screen.queryByText('with children')).toBeNull();
      expect(screen.queryByText('notifications ✔')).toBeNull();
    });

    test('if data is true', () => {
      const trueData = Object.assign({}, data);
      trueData.withChildren = true;
      trueData.getNotification = true;

      render(<RequestCard data={trueData} />);

      expect(screen.getByText('with children')).toBeInTheDocument();
      expect(screen.getByText('notifications ✔')).toBeInTheDocument();
    });
  });
});
