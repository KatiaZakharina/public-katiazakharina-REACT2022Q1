import { TourData } from 'services/types';

import { IconList } from 'components/IconList/IconList';

export const cardInfoData: Array<{ name: keyof CardInfoProps; icon: string; text?: string }> = [
  { name: 'city', icon: 'location.svg' },
  { name: 'rating', icon: 'star.svg', text: 'stars' },
  { name: 'landmarks', icon: 'calendar.svg' },
];

type CardInfoProps = Partial<TourData>;

export const CardInfo = (props: CardInfoProps) => (
  <IconList data={props} dataDecoration={cardInfoData} />
);
