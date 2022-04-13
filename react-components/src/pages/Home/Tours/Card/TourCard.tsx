import { TourData } from 'services/ToursDataType';
import { CardInfo } from './CardInfo/CardInfo';
import { CardLabels } from './CardLabels/CardLabels';
import { StyledTourCard, CardTitle, CardImg, CardDescription } from './StyledTourCard';

type CardProps = { data: TourData; showTourDetails: (id: string) => void };

export function TourCard(props: CardProps) {
  const { id, accommodation, img, rating, city, country, price, landmarks } = props.data;

  return (
    <StyledTourCard
      data-testid="tour_card"
      onClick={() => {
        props.showTourDetails(id);
      }}
    >
      <CardImg img={img} name={accommodation} />

      <CardDescription>
        <CardTitle>{accommodation}</CardTitle>
        <CardInfo rating={rating} city={city} landmarks={landmarks} />
        <CardLabels country={country} price={price} />
      </CardDescription>
    </StyledTourCard>
  );
}
