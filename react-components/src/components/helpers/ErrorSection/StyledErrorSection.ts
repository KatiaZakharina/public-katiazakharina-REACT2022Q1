import styled from 'styled-components';

import { DARK_GRAY, LIGHT_GRAY, ORANGE } from 'styles/constants';

export const StyledErrorSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 30px;
  background-color: ${LIGHT_GRAY};
`;

export const ErrorImg = styled.img.attrs({ alt: 'error illustration' })`
  width: 30vw;
  height: 30vw;
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
`;

export const ErrorDescription = styled.div`
  max-width: 40vw;
  min-width: 180px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 2rem;
  color: ${ORANGE};
`;

export const Message = styled.p`
  margin-bottom: 10px;
  color: ${DARK_GRAY};
`;

export const ErrorCode = styled.p`
  font-size: 1rem;
  color: ${ORANGE};
`;
