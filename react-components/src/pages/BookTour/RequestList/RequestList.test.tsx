import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { RequestList } from './RequestList';
import { TourFormData } from '../Form/Form';

const emptyRequests: Array<TourFormData> = [];

export const requests: Array<TourFormData> = [
  {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    email: 'ivan@gmail.com',
    date: '2022-04-06',
    destination: 'France',
    withChildren: false,
    pcr: 'pcr.jpeg',
    getNotification: false,
  },
  {
    firstName: 'Sidorov',
    lastName: 'Sidorenko',
    email: 'i@gmail.com',
    date: '2022-05-07',
    destination: 'Italy',
    withChildren: true,
    pcr: 'pcr.jpeg',
    getNotification: false,
  },
  {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    email: 'ivan@gmail.com',
    date: '2022-04-06',
    destination: 'France',
    withChildren: true,
    pcr: 'pcr.jpeg',
    getNotification: true,
  },
];

describe('RequestsList', () => {
  it('renders cards if exists', () => {
    render(<RequestList requests={requests} />);

    expect(screen.getAllByTestId('request_card')).toHaveLength(requests.length);
  });

  it('renders title', () => {
    render(<RequestList requests={requests} />);

    expect(screen.getByText('Requests List')).toBeInTheDocument();
  });

  it('renders description if empty', () => {
    render(<RequestList requests={emptyRequests} />);

    expect(screen.getByTestId('request_description')).toBeInTheDocument();
  });
});
