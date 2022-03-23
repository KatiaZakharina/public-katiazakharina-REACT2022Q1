import styled from 'styled-components';

import { BLACK, GRAY, WHITE } from '../../../../styles/colorConstats';

export const StyledSearch = styled.div`
  display: flex;
  margin: 0 auto 30px;
  padding: 20px 30px;
  width: calc(100vw - 15rem);
  background-color: ${WHITE};
  box-shadow: 0px 4px 30px rgb(0 0 0 / 15%);
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 6px 10px;
  border: 1px ${GRAY} solid;
  border-right: none;
`;

export const SearchButton = styled.button`
  padding: 4px 10px;
  font-size: 1rem;
  text-align: center;
  color: ${WHITE};
  border: none;
  background: #fb8f1b;
`;

export const NoMatch = styled.p`
  text-align: center;
  font-size: 1.7rem;
  color: ${BLACK};
`;
