import { ChangeEvent, FormEvent, useState } from 'react';

import { useAppContext } from 'AppContextProvider';
import { SearchButton, StyledSearch } from './StyledSearch';
import { Input } from 'components/Inputs';

type SearchProps = { disabled: boolean };

export const Search = ({ disabled }: SearchProps) => {
  const { search, setSearch } = useAppContext();
  const [searchText, setSearchText] = useState(search);

  const onUpdateSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).elements?.[0] as HTMLInputElement;
    setSearch(searchInput.value);
  };

  const onUpdateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <StyledSearch onSubmit={onUpdateSearch}>
      <Input
        inputField={{ type: 'text', placeholder: 'Search by location', value: searchText }}
        name="search"
        onChange={onUpdateSearchText}
      />
      <SearchButton disabled={disabled}>Search</SearchButton>
    </StyledSearch>
  );
};
