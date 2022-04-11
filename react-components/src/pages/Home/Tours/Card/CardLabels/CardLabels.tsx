import { ButtonBadge } from 'components/Badges/ButtonBadge';
import { LabelBadge } from 'components/Badges/LabelBadge';
import { CardLabelsWrapper } from './StyledCardLabels';

type CardLabelsProps = { country: string; price?: number };

export const CardLabels = ({ country, price }: CardLabelsProps) => (
  <CardLabelsWrapper>
    {price ? <LabelBadge>{price}$</LabelBadge> : null}
    {country ? <ButtonBadge>{country}</ButtonBadge> : null}
  </CardLabelsWrapper>
);
