import { StyledList, StyledListWrapper, StyledOl } from './StyledDescription';

export function Description() {
  const descriptionList = [
    'Describe your dream trip',
    'Get matched with top travel specialists',
    'Book the trip',
  ];
  return (
    <StyledListWrapper>
      <StyledList data-testid="request_description">
        {descriptionList.map((text, index) => (
          <StyledOl key={index}>{text}</StyledOl>
        ))}
      </StyledList>
    </StyledListWrapper>
  );
}
