import styled from 'styled-components';

import { ORANGE } from 'styles/constants';

export const StyledRequestList = styled.div`
  margin-top: 48px;
  max-width: 550px;
  width: 100%;
`;

export const RequestsTitle = styled.h2`
  margin-bottom: 25px;
  color: ${ORANGE};
  text-align: center;
`;

export const LabelsWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
