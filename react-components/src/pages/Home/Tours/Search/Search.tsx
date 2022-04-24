import { FormEvent, useEffect } from 'react';

import { useAppContext } from 'AppContextProvider';
import { SearchButton, StyledInput, StyledSearch } from './StyledSearch';

type SearchProps = { disabled: boolean };

export const Search = ({ disabled }: SearchProps) => {
  const { search, setSearch } = useAppContext();

  useEffect(() => {
    localStorage.setItem('tours_search', search);
  }, [search]);

  const onUpdateSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).elements?.[0] as HTMLInputElement;
    setSearch(searchInput.value);
  };

  return (
    <StyledSearch onSubmit={onUpdateSearch}>
      <StyledInput
        type="textbox"
        placeholder="Search by location"
        name="search"
        disabled={disabled}
      />
      <SearchButton disabled={disabled}>Search</SearchButton>
    </StyledSearch>
  );
};
