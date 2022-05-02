import { ChangeEvent, FormEvent } from 'react';

import { SearchButton, StyledSearch } from './StyledSearch';
import { Input } from 'components/Inputs';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeSearch, fetchTours } from 'store/reducers/tours/tourSlice';

type SearchProps = { disabled: boolean };

export const Search = ({ disabled }: SearchProps) => {
  const search = useAppSelector((state) => state.toursReducer.searchValue);
  const dispatch = useAppDispatch();

  const onUpdateSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchTours());
  };

  const onUpdateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <StyledSearch onSubmit={onUpdateSearch}>
      <Input
        inputField={{ type: 'text', placeholder: 'Search by location', value: search }}
        name="search"
        onChange={onUpdateSearchText}
      />
      <SearchButton disabled={disabled}>Search</SearchButton>
    </StyledSearch>
  );
};
