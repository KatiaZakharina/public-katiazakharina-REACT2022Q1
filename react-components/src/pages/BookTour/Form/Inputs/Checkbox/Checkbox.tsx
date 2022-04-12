import React from 'react';

import { CheckboxWrapper, HiddenCheckbox, Icon, StyledCheckbox } from './StyledCheckbox';

type CheckboxProps = { id?: string; name?: string };
type CheckboxRef = HTMLInputElement;

export const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(function (props, ref) {
  const { id, name } = props;

  return (
    <CheckboxWrapper>
      <HiddenCheckbox id={id} name={name} ref={ref} />
      <StyledCheckbox>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxWrapper>
  );
});
