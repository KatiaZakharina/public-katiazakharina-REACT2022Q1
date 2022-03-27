import { Component } from 'react';

import { TourData, ToursData } from '../../../../db/ToursDataType';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { SyledCardsWrapper } from './StyledCardsSection';
import { ColumnContainer } from '../../../../components/Layout/Container';
import { NoMatch } from '../Search/StyledSearch';

type CardSectionProps = { data: ToursData };
type CardSectionState = { data: ToursData; search: string };

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
    if (this.state.search.length === 0) return true;

    const searchString = this.state.search.toLocaleLowerCase();
    const searchFields: Array<keyof TourData> = ['city', 'accommodation', 'country'];

    return searchFields.some((field) =>
      tour[field].toString().toLowerCase().includes(searchString)
    );
  }

  render() {
    const searchResultData = this.state.data.filter(this.filterTour.bind(this));

    return (
      <ColumnContainer>
        <Search onUpdateSearch={this.onUpdateSearch} />

        <SyledCardsWrapper>
          {searchResultData.length !== 0 ? (
            searchResultData.map((tour) => <Card data={tour} key={tour.id} />)
          ) : (
            <NoMatch>Your search did not match any tours.</NoMatch>
          )}
        </SyledCardsWrapper>
      </ColumnContainer>
    );
  }
}
