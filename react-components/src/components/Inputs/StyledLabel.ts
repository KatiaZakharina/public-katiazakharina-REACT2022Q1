import styled, { css } from 'styled-components';

const reversed = css`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
`;

export const Label = styled.label<{ reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  ${(props) => props.reversed && reversed}
`;
