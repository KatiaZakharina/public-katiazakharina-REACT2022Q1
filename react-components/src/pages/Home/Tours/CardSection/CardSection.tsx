import { Component } from 'react';

import { TourData } from 'db/ToursDataType';
import { TourCard } from '../Card/TourCard';
import { Search } from '../Search/Search';
import { StyledCardSection, StyledCardsWrapper } from './StyledCardsSection';
import { NoMatch } from '../Search/StyledSearch';

type CardSectionProps = { data: Array<TourData> };
type CardSectionState = { data: Array<TourData>; search: string };

export class CardSection extends Component<CardSectionProps, CardSectionState> {
  constructor(props: CardSectionProps) {
    super(props);
    this.state = {
      data: props.data,
      search: localStorage.getItem('tours_search') ?? '',
    };
  }
  onUpdateSearch = (search: string) => {
    this.setState({ search });
  };

  filterTour(tour: TourData) {
    if (!this.state.search.length) {
      return true;
    }

    const searchString = this.state.search.toLocaleLowerCase();
    const searchFields: Array<keyof TourData> = ['city', 'accommodation', 'country'];

    return searchFields.some((field) =>
      tour[field].toString().toLowerCase().includes(searchString)
    );
  }

  render() {
    const searchResultData = this.state.data.filter(this.filterTour.bind(this));

    return (
      <StyledCardSection>
        <Search onUpdateSearch={this.onUpdateSearch} />

        <StyledCardsWrapper>
          {!!searchResultData.length ? (
            searchResultData.map((tour) => <TourCard data={tour} key={tour.id} />)
          ) : (
            <NoMatch>Your search did not match any tours.</NoMatch>
          )}
        </StyledCardsWrapper>
      </StyledCardSection>
    );
  }
}
