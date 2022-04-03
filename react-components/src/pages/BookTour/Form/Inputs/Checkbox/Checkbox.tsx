import React from 'react';

import { CheckboxWrapper, HiddenCheckbox, Icon, StyledCheckbox } from './StyledCheckbox';

type CheckboxProps = { idValue: string; nameValue: string };
type CheckboxRef = HTMLInputElement;

export const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>((props, ref) => (
  <CheckboxWrapper>
    <HiddenCheckbox id={props.idValue} name={props.nameValue} ref={ref} />
    <StyledCheckbox>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxWrapper>
));
