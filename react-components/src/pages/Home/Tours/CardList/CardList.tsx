import { Component } from 'react';

import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { TourData, TourDetailsType } from 'services/ToursDataType';
import { Card } from '../Card/Card';
import { StyledCardList } from './StyledCardList';
import { Modal } from 'components/Modal/Modal';
import { TourDetails } from '../TourDetails/TourDetails';
import { TourService } from 'services/TourService';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';

type CardListProps = { data: Array<TourData> };

type CardListState = {
  modalIsVisible: boolean;
  modalData: TourDetailsType | null;
  modalDataLoaded: boolean;
  errorCode: number | null;
};

export class CardList extends Component<CardListProps, CardListState> {
  private service;

  constructor(props: CardListProps) {
    super(props);
    this.service = new TourService(this.setErrorCode);
    this.state = {
      modalIsVisible: false,
      modalData: null,
      modalDataLoaded: false,
      errorCode: null,
    };
  }

  setErrorCode = (code: number) => {
    this.setState({ errorCode: code });
  };

  hideModal = () => {
    this.setState({ modalIsVisible: false, modalData: null });
  };

  showTourDetails = async (id: string) => {
    try {
      this.setState({ modalIsVisible: true, modalDataLoaded: false });
      const data = await this.service.getTourDetails(id);
      this.setState({ modalData: data, modalDataLoaded: true });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <StyledCardList data-testid="tour_cards">
          {!!data.length ? (
            data.map((tour) => (
              <Card data={tour} key={tour.id} showTourDetails={this.showTourDetails} />
            ))
          ) : (
            <ErrorSection message="Your search did not match any tours" code="empty_search" />
          )}
        </StyledCardList>

        {this.state.modalIsVisible && (
          <Modal isVisible={this.state.modalIsVisible} hideModal={this.hideModal}>
            {this.state.errorCode ? (
              <ErrorSection code={this.state.errorCode} />
            ) : this.state.modalDataLoaded ? (
              <TourDetails data={this.state.modalData} />
            ) : (
              <SpinnerLoading />
            )}
          </Modal>
        )}
      </>
    );
  }
}
