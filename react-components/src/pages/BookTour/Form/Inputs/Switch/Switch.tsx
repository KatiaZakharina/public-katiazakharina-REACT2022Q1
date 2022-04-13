import React from 'react';

import { SwitchWrapper, Slider } from './StyledSwitch';
import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';

type TSwitchRef = HTMLInputElement;
type TSwitchProps = { id?: string; name?: string };

export const ToggleSwitch = React.forwardRef<TSwitchRef, TSwitchProps>(function (props, ref) {
  const { id, name } = props;

  return (
    <SwitchWrapper>
      <HiddenCheckbox id={id} name={name} ref={ref} />
      <Slider />
    </SwitchWrapper>
  );
});
