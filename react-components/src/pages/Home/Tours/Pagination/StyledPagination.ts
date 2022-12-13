import styled from 'styled-components';

import { Button } from 'components/Inputs';
import { StyledInput } from 'components/Inputs/Input/StyledInput';
import { BLACK, WHITE } from 'styles/constants';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 200px;
  height: 40px;
  color: ${BLACK};
  text-align: center;
  background-color: ${WHITE};
  border-radius: 20px;

  ${Button} {
    width: 50px;
  }

  ${StyledInput} {
    width: 30px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      display: none;
      appearance: none;
      margin: 0;
    }
  }
`;
