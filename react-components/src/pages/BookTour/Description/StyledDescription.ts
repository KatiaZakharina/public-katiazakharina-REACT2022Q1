import styled from 'styled-components';

import { BLACK, GRAY } from 'styles/colorConstants';

export const StyledList = styled.ul`
  display: block;
  margin-bottom: 30px;
  padding: 1.5rem;
  width: 30vw;
  min-width: 250px;
  color: ${BLACK};
  font-size: 0.8rem;
  font-weight: normal;
  list-style-type: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  counter-reset: list;
`;

export const StyledOl = styled.ol`
  position: relative;
  margin-bottom: 15px;
  margin-left: 20px;

  &::before {
    counter-increment: list;
    content: counter(list);
    position: absolute;
    top: -4px;
    left: -25px;
    display: block;
    width: 10px;
    height: 10px;
    padding: 5px;
    font-size: 12px;
    border-radius: 15px;
    border: 1px solid ${GRAY};
    text-align: center;
  }
`;
