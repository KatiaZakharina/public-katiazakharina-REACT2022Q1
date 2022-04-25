import styled from 'styled-components';

import { GRAY, ORANGE, WHITE } from 'styles/constants';

export const StyledSearch = styled.form`
  display: flex;
  width: 100%;
  height: 40px;
`;

export const SearchButton = styled.button`
  padding: 4px 10px;
  font-size: 1rem;
  text-align: center;
  color: ${WHITE};
  border: none;
  background-color: ${ORANGE};
  cursor: pointer;

  &:disabled {
    background-color: ${GRAY};
  }
`;
