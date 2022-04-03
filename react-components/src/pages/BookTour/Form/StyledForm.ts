import styled from 'styled-components';

import { cardStyle } from 'styles/cardStyle';
import { GRAY, LIGHT_GRAY, ORANGE } from 'styles/constants';
import { Button } from './Inputs';

export const FormWrapper = styled.form`
  ${cardStyle}
  position: relative;
  margin: 48px auto 0;
  width: 100%;
  max-width: min(calc(100vw - 100px), 550px);
  height: 100%;
  min-width: 250px;
  background-color: ${LIGHT_GRAY};

  & ${Button} {
    background-color: ${GRAY};
  }
  &:valid ${Button} {
    background-color: ${ORANGE};
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

export const Label = styled.label`
  display: block;
  margin-top: 24px;
`;

export const Fieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  border: 0;
`;
