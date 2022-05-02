import { Form } from './Form/Form';
import { RequestList } from './RequestList/RequestList';
import { StyledBookTour } from './StyledBookTour';

import { useAppSelector } from 'store/hooks';

export const BookTour = () => {
  const requests = useAppSelector((state) => state.requestsReducer.requests);
  return (
    <StyledBookTour data-testid="book_tour_page">
      <Form />

      <RequestList requests={requests} />
    </StyledBookTour>
  );
};
