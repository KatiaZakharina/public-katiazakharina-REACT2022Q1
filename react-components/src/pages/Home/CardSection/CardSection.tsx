import { Component } from 'react';

import { ToursData } from '../../../db/ToursDataType';
import { Card } from './Card/Card';
import { Search } from './Search/Search';
import { SyledCardsWrapper } from './StyledCardsSection';
import { ColumnContainer } from '../../../components/Layout/Container';

type CardSectionProps = { data: ToursData };
type CardSectionState = { data: ToursData; search: string };

export class CardSection extends Component<CardSectionProps, CardSectionState> {
  constructor(props: CardSectionProps) {
    super(props);
    this.state = {
      data: props.data,
      search: localStorage.getItem('tours_search') || '',
    };
  }

  render() {
    return (
      <ColumnContainer>
        <Search />
        <SyledCardsWrapper>
          {this.state.data.map((tour) => (
            <Card data={tour} key={tour.id} />
          ))}
        </SyledCardsWrapper>
      </ColumnContainer>
    );
  }
}
