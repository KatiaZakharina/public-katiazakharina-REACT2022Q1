import styled from 'styled-components';

import { StyledContainer } from 'components/Layout/Container';
import { BLACK, WHITE } from 'styles/colorConstants';

export const StyledFooter = styled.footer`
  padding: 10px 0;
  background-color: ${BLACK};

  & ${StyledContainer} {
    justify-content: space-between;
  }
`;

export const RSLogo = styled.img`
  width: 5rem;
  height: 2rem;
`;

export const DevInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2rem;
  max-width: 400px;

  & a {
    text-decoration: none;
    color: ${WHITE};
  }
`;
