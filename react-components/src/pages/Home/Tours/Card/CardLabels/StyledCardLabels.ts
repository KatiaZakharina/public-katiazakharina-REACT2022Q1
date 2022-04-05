import styled from 'styled-components';
import { BLUE, ORANGE, WHITE } from 'styles/colorConstants';

export const CardLabelsWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
`;

export const CountryBadge = styled.div`
  font-size: 1rem;
  text-align: center;
  color: ${WHITE};
  background: ${ORANGE};
  border-radius: 30px 0 0 30px;
  padding: 4px 10px;
`;

export const Price = styled.div`
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  text-align: center;
  color: ${BLUE};
`;
