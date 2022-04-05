import { StyledList, StyledOl } from './StyledDescription';

export function Description() {
  const descriptionList = [
    'Describe your dream trip',
    'Get matched with top travel specialists',
    'Book the trip',
  ];
  return (
    <StyledList>
      {descriptionList.map((text, idx) => (
        <StyledOl key={idx}>{text}</StyledOl>
      ))}
    </StyledList>
  );
}
