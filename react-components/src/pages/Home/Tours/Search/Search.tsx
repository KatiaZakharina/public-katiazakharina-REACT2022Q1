import { ChangeEvent, FormEvent } from 'react';

import { SearchButton, StyledSearch } from './StyledSearch';
import { Input } from 'components/Inputs';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { changeSearch } from 'features/tours/actions';

type SearchProps = { disabled: boolean };

export const Search = ({ disabled }: SearchProps) => {
  const search = useAppSelector((state) => state.toursReducer.searchValue);
  const dispatch = useAppDispatch();

  const onUpdateSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).elements?.[0] as HTMLInputElement;
    dispatch(changeSearch(searchInput.value));
  };

  const onUpdateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };
  // FIXME: run tours update only by onSubmit

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
