import styled from 'styled-components';

import { GRAY, ORANGE } from 'styles/constants';

export const Input = styled.input`
  margin: 5px 0;
  padding: 7px;
  width: 100%;
  font-size: 0.9rem;
  border: 0;
  border-bottom: 2px solid ${GRAY};
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: ${ORANGE};
    outline: 0;
  }
`;
