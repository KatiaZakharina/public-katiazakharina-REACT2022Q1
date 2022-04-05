import { TourData } from 'db/ToursDataType';

import { IconList } from 'components/IconList/IconList';

export const cardInfoData: Array<{ name: keyof CardInfoProps; icon: string; text?: string }> = [
  { name: 'rating', icon: 'star.svg', text: 'stars' },
  { name: 'duration', icon: 'calendar.svg', text: 'days' },
  { name: 'city', icon: 'location.svg' },
];

type CardInfoProps = Partial<TourData>;

export const CardInfo = (props: CardInfoProps) => (
  <IconList data={props} dataDecoration={cardInfoData} />
);
