import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { TourData } from 'services/ToursDataType';
import { TourCard } from '../Card/TourCard';
import { StyledCardList } from './StyledCardList';

type CardListProps = { data: Array<TourData> };

export const CardList = ({ data }: CardListProps) => {
  return (
    <StyledCardList data-testid="tour_cards">
      {!!data.length ? (
        data.map((tour) => <TourCard data={tour} key={tour.id} />)
      ) : (
        <ErrorSection message="Your search did not match any tours" code="empty_search" />
      )}
    </StyledCardList>
  );
};
