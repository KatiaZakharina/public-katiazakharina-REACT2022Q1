import styled from 'styled-components';

import { BLACK, BOX_SHADOW_SIDE, WHITE } from 'styles/constants';

export const StyledCard = styled.div`
  padding: 1.5rem;
  color: ${BLACK};
  background-color: ${WHITE};
  border-radius: 5px;
  box-shadow: ${BOX_SHADOW_SIDE};
`;
