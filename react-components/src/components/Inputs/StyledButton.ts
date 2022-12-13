import styled from 'styled-components';

import { GRAY, ORANGE, WHITE } from 'styles/constants';

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${WHITE};
  background-color: ${ORANGE};
  border: 0;
  border-radius: 35px;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }

  &:disabled {
    background-color: ${GRAY};
  }
`;
