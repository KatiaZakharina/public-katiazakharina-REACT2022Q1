import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ORANGE } from 'styles/constants';

export const StyledBreadcrumbs = styled.div`
  padding: 10px 0;
  margin-top: 20px;
  list-style: none;
  border: 1px solid ${ORANGE};
`;

export const Crumb = styled(Link)`
  display: inline-block;
  padding: 0 8px;
  color: ${ORANGE};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  padding: 10px;
  font-weight: bold;
  border: 0;
  border-right: 2px solid ${ORANGE};
  background-color: transparent;
  cursor: pointer;
`;
