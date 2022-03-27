import { TourData } from '../../../../../db/ToursDataType';
import { CardIcon, CardInfoRow, StyledCardInfo } from './StyledCardInfo';

export const cardInfoData: Array<{ name: keyof CardInfoProps; icon: string; text?: string }> = [
  { name: 'rating', icon: 'star.svg', text: 'stars' },
  { name: 'duration', icon: 'calendar.svg', text: 'days' },
  { name: 'city', icon: 'location.svg' },
];

type CardInfoProps = Partial<TourData>;

export const CardInfo = (props: CardInfoProps) => (
  <StyledCardInfo>
    {cardInfoData.map((field, idx) => (
      <CardInfoRow key={idx}>
        <CardIcon src={require(`../../../../../assets/svg/${field.icon}`)} />
        {`${props[field.name]} ${field.text ?? ''}`}
      </CardInfoRow>
    ))}
  </StyledCardInfo>
);
