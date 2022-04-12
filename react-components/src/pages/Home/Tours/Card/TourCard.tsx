import { TourData } from 'db/ToursDataType';
import { CardInfo } from './CardInfo/CardInfo';
import { CardLabels } from './CardLabels/CardLabels';
import { StyledTourCard, CardTitle, CardImg, CardDescription } from './StyledTourCard';

type CardProps = { data: TourData };

export function TourCard(props: CardProps) {
  const { accommodation, img, rating, city, country, price, duration } = props.data;

  return (
    <StyledTourCard data-testid="tour_card">
      <CardImg img={require(`assets/cards/${img}`)} name={accommodation} />

      <CardDescription>
        <CardTitle>{accommodation}</CardTitle>
        <CardInfo rating={rating} city={city} duration={duration} />
        <CardLabels country={country} price={price} />
      </CardDescription>
    </StyledTourCard>
  );
}
