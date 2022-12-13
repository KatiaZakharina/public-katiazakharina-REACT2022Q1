import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';
import { FormInputProps } from '../InputTypes';
import { Slider, SwitchWrapper } from './StyledSwitch';

export const ToggleSwitch = ({ name, register, inputField }: FormInputProps<HTMLInputElement>) => {
  const { register: registerOptions, type, ...attributes } = inputField;
  return (
    <SwitchWrapper>
      <HiddenCheckbox
        {...(register ? register(name, registerOptions) : { name })}
        {...attributes}
        type="checkbox"
      />
      <Slider />
    </SwitchWrapper>
  );
};
