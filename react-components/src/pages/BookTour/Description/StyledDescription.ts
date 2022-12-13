import styled from 'styled-components';

import { StyledCard } from 'components/Card/StyledCard';
import { GRAY } from 'styles/constants';

export const StyledListWrapper = styled(StyledCard)`
  margin-bottom: 30px;
`;

export const StyledList = styled.ul`
  display: block;
  min-width: 250px;
  font-size: 1rem;
  font-weight: normal;
  list-style-type: none;
  counter-reset: list;
`;

export const StyledOl = styled.ol`
  position: relative;
  margin: 8px 0 8px 20px;

  &::before {
    counter-increment: list;
    content: counter(list);
    position: absolute;
    left: -25px;
    display: block;
    width: 10px;
    height: 10px;
    padding: 5px;
    line-height: 0.5rem;
    font-size: 12px;
    border-radius: 15px;
    border: 1px solid ${GRAY};
    text-align: center;
  }
`;
