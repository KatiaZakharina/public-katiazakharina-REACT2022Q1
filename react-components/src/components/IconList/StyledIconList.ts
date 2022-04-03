import styled from 'styled-components';

export const StyledIconList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 10px 1rem;
  font-weight: 300;
  font-size: 0.8rem;
  list-style-type: none;
`;

export const IconRow = styled.li`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;
