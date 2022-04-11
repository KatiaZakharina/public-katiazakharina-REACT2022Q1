import { ChangeEvent, Component, FormEvent } from 'react';

import { SearchButton, StyledInput, StyledSearch } from './StyledSearch';

type SearchProps = { onUpdateSearch: (search: string) => void; disabled: boolean };
type SearchState = { search: string };

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { search: localStorage.getItem('tours_search') ?? '' };

    this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveInLocalStorage);
  }

  componentWillUnmount() {
    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem('tours_search', this.state.search);
  }

  onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    this.setState({ search });
  };

  onUpdateCards = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onUpdateSearch(this.state.search);
  };

  render() {
    return (
      <StyledSearch onSubmit={this.onUpdateCards}>
        <StyledInput
          type="textbox"
          placeholder="Search by location"
          onChange={this.onUpdateSearch}
          value={this.state.search ?? ''}
          disabled={this.props.disabled}
        />
        <SearchButton disabled={this.props.disabled}>Search</SearchButton>
      </StyledSearch>
    );
  }
}
