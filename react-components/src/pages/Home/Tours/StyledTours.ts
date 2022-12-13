import styled from 'styled-components';

import { ColumnContainer } from 'components/Layout/Container';
import { BLACK, BOX_SHADOW_ALL, WHITE } from 'styles/constants';

export const StyledTours = styled(ColumnContainer)`
  margin-bottom: 20px;
`;

export const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px 0;
  margin: 0 auto 30px;
  padding: 20px 30px;
  width: 100%;
  color: ${BLACK};
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW_ALL};

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
