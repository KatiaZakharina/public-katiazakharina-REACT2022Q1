import styled from 'styled-components';

import { GRAY, ORANGE } from 'styles/constants';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  visibility: hidden;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${GRAY};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    border: 1px solid ${ORANGE};
  }

  ${HiddenCheckbox}:checked + & {
    background: ${ORANGE};
  }

  ${HiddenCheckbox}:checked + & ${Icon} {
    visibility: visible;
  }
`;

export const CheckboxWrapper = styled.label`
  display: inline-block;
  margin: 8px;
  vertical-align: middle;
`;
