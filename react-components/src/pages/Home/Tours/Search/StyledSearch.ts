import styled from 'styled-components';

import { BLACK, BOX_SHADOW_ALL, DARK_GRAY, ORANGE, WHITE } from 'styles/constants';

export const StyledSearch = styled.form`
  display: flex;
  margin: 0 auto 30px;
  padding: 20px 30px;
  width: calc(100vw - 15rem);
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW_ALL};
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 6px 10px;
  border: 1px ${DARK_GRAY} solid;
  border-right: none;
`;

export const SearchButton = styled.button`
  padding: 4px 10px;
  font-size: 1rem;
  text-align: center;
  color: ${WHITE};
  border: none;
  background: ${ORANGE};
`;

export const NoMatch = styled.p`
  text-align: center;
  font-size: 1.7rem;
  color: ${BLACK};
`;
