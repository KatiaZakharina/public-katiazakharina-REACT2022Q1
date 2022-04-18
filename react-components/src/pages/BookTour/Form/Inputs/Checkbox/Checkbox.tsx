import { InputProps } from '../InputTypes';
import { CheckboxWrapper, HiddenCheckbox, Icon, StyledCheckbox } from './StyledCheckbox';

export const Checkbox = ({ name, register, inputField }: InputProps<HTMLInputElement>) => {
  const { register: registerOptions, ...attributes } = inputField;
  return (
    <CheckboxWrapper>
      <HiddenCheckbox {...register(name, registerOptions)} {...attributes} />
      <StyledCheckbox>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxWrapper>
  );
};
