import { ChangeEvent } from 'react';

import { customInputs, CustomInputs, Input } from 'components/Inputs';
import { Label } from 'components/Inputs/StyledLabel';
import { inputFields } from './FilterFields';
import { StyledFilterPanel } from './StyledFilterPanel';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { FilterData } from 'features/tours/types';
import { changeFilters } from 'features/tours/actions';

export const FilterPanel = () => {
  const filters = useAppSelector((state) => state.toursReducer.filters);
  const dispatch = useAppDispatch();

  const fields: Array<keyof FilterData> = ['pageSize', 'rating', 'sortOrder'];

  const onChange = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilters({ ...filters, [e.target.name]: e.target.value }));
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
