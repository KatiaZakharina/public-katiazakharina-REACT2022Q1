import styled from 'styled-components';

import { BLACK, GRAY, ORANGE } from 'styles/colorConstants';
import { Button } from './Inputs';

export const FormWrapper = styled.form`
  position: relative;
  padding: 0 0 1.5rem;
  margin: 48px auto 0;
  width: 100%;
  height: 100%;
  min-width: 250px;
  max-width: 550px;
  color: ${BLACK};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  & ${Button} {
    background-color: ${GRAY};
  }
  &:valid ${Button} {
    background-color: ${ORANGE};
  }
`;

export const FormHeader = styled.header`
  padding-top: 1.5rem;
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

export const Fieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  border: 0;
`;
