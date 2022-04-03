import React from 'react';

import { SwitchWrapper, Slider } from './StyledSwitch';
import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';

type ToggleSwitchRef = HTMLInputElement;
type ToggleSwitchProps = { idValue: string; nameValue: string };

export const ToggleSwitch = React.forwardRef<ToggleSwitchRef, ToggleSwitchProps>((props, ref) => (
  <SwitchWrapper>
    <HiddenCheckbox id={props.idValue} name={props.nameValue} ref={ref} />
    <Slider />
  </SwitchWrapper>
));
