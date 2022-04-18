import { useEffect, useState } from 'react';

import { Form } from './Form/Form';
import { TourFormData } from './Form/FormFields';
import { RequestList } from './RequestList/RequestList';
import { StyledBookTour } from './StyledBookTour';

export const BookTour = () => {
  const [requests, setRequests] = useState<Array<TourFormData>>(
    JSON.parse(localStorage.getItem('tour_requests') ?? '[]')
  );

  const updateRequests = (data: TourFormData) => {
    setRequests([...requests, data]);
  };

  useEffect(() => {
    localStorage.setItem('tour_requests', JSON.stringify(requests));
  }, [requests]);

  return (
    <StyledBookTour data-testid="book_tour_page">
      <Form onUpdateRequests={updateRequests} />

      <RequestList requests={requests} />
    </StyledBookTour>
  );
};
