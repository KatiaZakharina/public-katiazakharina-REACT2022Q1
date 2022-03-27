import { TourData } from '../../../../db/ToursDataType';
import { CardInfo } from './CardInfo/CardInfo';
import { CardLabels } from './CardLabels/CardLabels';
import { StyledCard, CardTitle, CardImg, CardDescription } from './StyledCard';

type CardProps = { data: TourData };

export function Card(props: CardProps) {
  const { accommodation, img, rating, city, country, price, duration } = props.data;

  return (
    <StyledCard data-testid="tour_card">
      <CardImg img={require(`../../../../assets/cards/${img}`)} name={accommodation} />

      <CardDescription>
        <CardTitle>{accommodation}</CardTitle>
        <CardInfo rating={rating} city={city} duration={duration} />
        <CardLabels country={country} price={price} />
      </CardDescription>
    </StyledCard>
  );
}
