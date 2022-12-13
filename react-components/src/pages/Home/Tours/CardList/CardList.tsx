import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { Pagination } from 'pages/Home/Tours/Pagination/Pagination';
import { TourData } from 'services/types';
import { TourCard } from '../Card/TourCard';
import { CardWrapper, StyledCardList } from './StyledCardList';

type CardListProps = { data: Array<TourData> };

export const CardList = ({ data }: CardListProps) => {
  return (
    <StyledCardList data-testid="tour_cards">
      {!!data.length ? (
        <>
          <CardWrapper>
            {data.map((tour) => (
              <TourCard data={tour} key={tour.id} />
            ))}
          </CardWrapper>
          <Pagination />
        </>
      ) : (
        <ErrorSection message="Your search did not match any tours" code="empty_search" />
      )}
    </StyledCardList>
  );
};
