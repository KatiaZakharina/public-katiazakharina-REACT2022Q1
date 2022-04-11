import { Component } from 'react';

import { TourData } from 'services/ToursDataType';
import { Search } from './Search/Search';
import { StyledTours } from './StyledTours';
import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { CardList } from './CardList/CardList';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourService } from 'services/TourService';

type ToursProps = Record<string, never>;
type ToursState = {
  data: Array<TourData>;
  isLoaded: boolean;
  errorCode: number | null;
  search: string;
};

export class Tours extends Component<ToursProps, ToursState> {
  private defaultCity: string;
  private service;

  constructor(props: ToursProps) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      errorCode: null,
      search: localStorage.getItem('tours_search') ?? '',
    };
    this.service = new TourService(this.setErrorCode);
    this.defaultCity = 'paris';
  }
  async componentDidMount() {
    await this.updateTours(this.state.search);
  }

  async updateTours(city: string) {
    if (!city.length) {
      city = this.defaultCity;
    }
    try {
      this.setState({ isLoaded: false });
      const data = await this.service.getBriefToursInfo(city);
      this.setState(() => ({ data, isLoaded: true }));
    } catch (error) {
      console.error(error);
    }
  }

  setErrorCode = (code: number) => {
    this.setState({ errorCode: code });
  };

  onUpdateSearch = (search: string) => {
    this.setState({ search });
    this.updateTours(search);
  };

  render() {
    return (
      <>
        {this.state.errorCode ? (
          <ErrorSection code={this.state.errorCode} />
        ) : (
          <StyledTours>
            <Search onUpdateSearch={this.onUpdateSearch} disabled={!this.state.isLoaded} />

            {!this.state.isLoaded ? <SpinnerLoading /> : <CardList data={this.state.data} />}
          </StyledTours>
        )}
      </>
    );
  }
}
