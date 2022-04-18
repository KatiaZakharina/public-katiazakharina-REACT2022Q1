import styled, { css } from 'styled-components';

import { StyledCard } from 'components/Card/StyledCard';
import { GRAY, LIGHT_GRAY } from 'styles/constants';
import { Button } from './Inputs';

export const FormWrapper = styled(StyledCard)`
  margin: 48px auto 0;
  width: 100%;
  max-width: min(calc(100vw - 100px), 550px);
  height: 100%;
  min-width: 250px;
  background-color: ${LIGHT_GRAY};
`;
export const StyledForm = styled.form`
  position: relative;

  &:not(:valid) ${Button} {
    background-color: ${GRAY};
  }
`;

export const FormHeader = styled.header`
  padding-bottom: 0.5rem;
`;

export const FormHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const FormBody = styled.div`
  padding: 0 1.5rem;
`;

const reversed = css`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
`;

export const Label = styled.label<{ reversed?: boolean }>`
  display: block;
  margin-top: 15px;

  ${(props) => props.reversed && reversed}
`;
