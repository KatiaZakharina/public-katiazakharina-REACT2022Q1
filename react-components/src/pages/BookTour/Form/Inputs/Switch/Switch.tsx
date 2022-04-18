import { HiddenCheckbox } from '../Checkbox/StyledCheckbox';
import { InputProps } from '../InputTypes';
import { Slider, SwitchWrapper } from './StyledSwitch';

export const ToggleSwitch = ({ name, register, inputField }: InputProps<HTMLInputElement>) => {
  const { register: registerOptions, type, ...attributes } = inputField;
  return (
    <SwitchWrapper>
      <HiddenCheckbox {...register(name, registerOptions)} {...attributes} type="checkbox" />
      <Slider />
    </SwitchWrapper>
  );
};
