import styled from 'styled-components';

import { GRAY, LIGHT_GRAY, ORANGE, WHITE } from 'styles/constants';
import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  width: 6em;
  height: 3.4em;
  font-size: 6px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${GRAY};
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: '';
    height: 2.6em;
    width: 2.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: ${WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }

  ${HiddenCheckbox}:checked + & {
    background-color: ${ORANGE};
  }

  ${HiddenCheckbox}:checked + &::before {
    transform: translateX(2.6em);
  }

  ${HiddenCheckbox}:disabled + & {
    pointer-events: none;
    background: ${LIGHT_GRAY};
  }
`;
