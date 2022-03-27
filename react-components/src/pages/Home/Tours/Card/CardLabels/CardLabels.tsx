import { CardLabelsWrapper, CountryBadge, Price } from './StyledCardLabels';

type CardLabelsProps = { country: string; price: number };

export const CardLabels = ({ country, price }: CardLabelsProps) => (
  <CardLabelsWrapper>
    <Price>{price}$</Price>
    <CountryBadge>{country}</CountryBadge>
  </CardLabelsWrapper>
);
