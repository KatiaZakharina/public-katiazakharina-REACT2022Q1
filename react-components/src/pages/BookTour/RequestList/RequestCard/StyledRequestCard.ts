import styled from 'styled-components';

import { cardStyle } from 'styles/cardStyle';

export const StyledRequestCard = styled.div`
  ${cardStyle}

  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const RequestFullName = styled.h3`
  margin: 15px 10px;
  max-width: 60%;
`;
