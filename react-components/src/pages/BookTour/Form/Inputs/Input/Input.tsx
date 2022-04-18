import { InputProps } from '../InputTypes';
import { StyledInput } from './StyledInput';

export const Input = ({ name, register, inputField }: InputProps<HTMLInputElement>) => {
  const { register: registerOptions, ...attributes } = inputField;

  return <StyledInput {...register(name, registerOptions)} {...attributes} />;
};
