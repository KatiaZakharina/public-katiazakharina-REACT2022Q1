import { TourData } from 'services/ToursDataType';
import { CardInfo } from './CardInfo/CardInfo';
import { CardLabels } from './CardLabels/CardLabels';
import { StyledCard, CardTitle, CardImg, CardDescription } from './StyledCard';

type CardProps = { data: TourData; showTourDetails: (id: string) => void };

export function Card(props: CardProps) {
  const { id, accommodation, img, rating, city, country, price, landmarks } = props.data;

  return (
    <StyledCard
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
    </StyledCard>
  );
}
