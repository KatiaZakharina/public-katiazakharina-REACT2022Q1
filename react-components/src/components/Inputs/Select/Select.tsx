import { StyledInput } from '../Input/StyledInput';
import { FormInputProps } from '../InputTypes';

export const Select = ({
  name,
  register,
  inputField,
  onChange,
}: FormInputProps<HTMLSelectElement>) => {
  const { register: registerOptions, options, values, ...attributes } = inputField;

  return (
    <StyledInput
      as="select"
      {...(register ? register(name, registerOptions) : { name, onChange: onChange })}
      {...attributes}
    >
      {options && (
        <>
          <option value="" hidden>
            {options[0]}
          </option>

          {options.slice(1).map((option, index) => (
            <option value={values?.[index] ?? option} key={index}>
              {option}
            </option>
          ))}
        </>
      )}
    </StyledInput>
  );
};
