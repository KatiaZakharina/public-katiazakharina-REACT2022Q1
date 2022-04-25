import { ChangeEvent } from 'react';

import { customInputs, CustomInputs, Input } from 'components/Inputs';
import { Label } from 'components/Inputs/StyledLabel';
import { FilterData, inputFields } from './FilterFields';
import { StyledFilterPanel } from './StyledFilterPanel';
import { useAppContext } from 'AppContextProvider';

export const FilterPanel = () => {
  const { filters, setFilters } = useAppContext();

  const fields: Array<keyof FilterData> = ['pageSize', 'rating', 'sortOrder'];

  const onChange = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <StyledFilterPanel>
      {fields.map((name, index) => {
        const type = inputFields[name].type as CustomInputs;
        const InputElement = type in customInputs ? customInputs[type] : Input;

        return (
          <Label htmlFor={name} key={index}>
            {inputFields[name].labelText}
            <InputElement
              name={name}
              inputField={{ ...inputFields[name], value: filters[name] }}
              onChange={onChange}
            />
          </Label>
        );
      })}
    </StyledFilterPanel>
  );
};
