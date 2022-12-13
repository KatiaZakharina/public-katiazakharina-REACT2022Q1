import { FormInputProps } from '../InputTypes';
import { StyledInput } from './StyledInput';

export const Input = ({
  name,
  register,
  inputField,
  onChange,
}: FormInputProps<HTMLInputElement>) => {
  const { register: registerOptions, ...attributes } = inputField;

  return (
    <StyledInput
      {...(register ? register(name, registerOptions) : { name, onChange: onChange })}
      {...attributes}
    />
  );
};
