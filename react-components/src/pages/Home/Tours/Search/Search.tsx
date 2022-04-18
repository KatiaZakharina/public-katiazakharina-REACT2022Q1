import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { SearchButton, StyledInput, StyledSearch } from './StyledSearch';

type SearchProps = { onUpdateSearch: (search: string) => void; disabled: boolean };

export const Search = (props: SearchProps) => {
  const [search, setSearch] = useState(localStorage.getItem('tours_search') ?? '');

  useEffect(() => {
    localStorage.setItem('tours_search', search);
  }, [search]);

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearch(search);
  };

  const onUpdateCards = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onUpdateSearch(search);
  };

  return (
    <StyledSearch onSubmit={onUpdateCards}>
      <StyledInput
        type="textbox"
        placeholder="Search by location"
        onChange={onUpdateSearch}
        value={search}
        disabled={props.disabled}
      />
      <SearchButton disabled={props.disabled}>Search</SearchButton>
    </StyledSearch>
  );
};
