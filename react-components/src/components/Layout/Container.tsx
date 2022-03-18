import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: calc(100vw - 100px);
  max-width: 1440px;
`;

type ContainerProps = { children: React.ReactNode };

export const Container = (props: ContainerProps) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export const ColumnContainer = styled(StyledContainer)`
  flex-direction: column;
`;
