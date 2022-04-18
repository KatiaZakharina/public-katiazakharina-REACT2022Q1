import { StyledInput } from '../Input/StyledInput';
import { InputProps } from '../InputTypes';

type SelectProps = InputProps<HTMLSelectElement>;

export const Select = ({ name, register, inputField }: SelectProps) => {
  const { register: registerOptions, options, ...attributes } = inputField;

  return (
    <StyledInput as="select" {...register(name, registerOptions)} {...attributes}>
      {options && (
        <>
          <option value="" hidden>
            {options[0]}
          </option>

          {options.slice(1).map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </>
      )}
    </StyledInput>
  );
};
