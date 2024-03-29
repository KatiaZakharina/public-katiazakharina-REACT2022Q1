import styled from 'styled-components';

export const StyledCardList = styled.div`
  margin: 0 auto;
  width: calc(100vw - 15rem);
  max-width: 1440px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`;
