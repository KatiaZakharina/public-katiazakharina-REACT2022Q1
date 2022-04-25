import { Form } from './Form/Form';
import { RequestList } from './RequestList/RequestList';
import { StyledBookTour } from './StyledBookTour';
import { useAppContext } from 'AppContextProvider';

export const BookTour = () => {
  const { requests } = useAppContext();

  return (
    <StyledBookTour data-testid="book_tour_page">
      <Form />

      <RequestList requests={requests} />
    </StyledBookTour>
  );
};
