import { Link } from 'react-router-dom';

import { TourData } from 'services/types';
import { CardInfo } from './CardInfo/CardInfo';
import { CardLabels } from './CardLabels/CardLabels';
import { StyledTourCard, CardTitle, CardImg, CardDescription } from './StyledTourCard';

type CardProps = { data: TourData };

export function TourCard(props: CardProps) {
  const { id, accommodation, img, rating, city, country, price, landmarks } = props.data;

  return (
    <StyledTourCard as={Link} to={`tours/${id}`} data-testid="tour_card">
      <CardImg img={img} name={accommodation} />

      <CardDescription>
        <CardTitle>{accommodation}</CardTitle>
        <CardInfo rating={rating} city={city} landmarks={landmarks} />
        <CardLabels country={country} price={price} />
      </CardDescription>
    </StyledTourCard>
  );
}
