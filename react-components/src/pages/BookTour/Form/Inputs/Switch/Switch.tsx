import React from 'react';

import { SwitchWrapper, Slider } from './StyledSwitch';
import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';

type ToggleSwitchRef = HTMLInputElement;

export const ToggleSwitch = React.forwardRef<ToggleSwitchRef>((_props, ref) => (
  <SwitchWrapper>
    <HiddenCheckbox ref={ref} />
    <Slider />
  </SwitchWrapper>
));
