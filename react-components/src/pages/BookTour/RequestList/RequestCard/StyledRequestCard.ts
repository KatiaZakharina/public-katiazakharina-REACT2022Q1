import styled from 'styled-components';

import { StyledCard } from 'components/Card/StyledCard';

export const StyledRequestCard = styled(StyledCard)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const RequestFullName = styled.h3`
  margin: 15px 10px;
  max-width: 60%;
`;
