import { useState } from 'react';

import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { TourData, TourDetailsType } from 'services/ToursDataType';
import { TourCard } from '../Card/TourCard';
import { StyledCardList } from './StyledCardList';
import { Modal } from 'components/Modal/Modal';
import { TourDetails } from '../TourDetails/TourDetails';
import { TourService } from 'services/TourService';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';

type CardListProps = { data: Array<TourData> };

export const CardList = ({ data }: CardListProps) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalData, setModalData] = useState<TourDetailsType | null>(null);
  const [modalDataLoaded, setModalDataLoaded] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  const service = new TourService(setErrorCode);

  const hideModal = () => {
    setModalIsVisible(false);
    setModalData(null);
  };

  const showTourDetails = async (id: string) => {
    try {
      setModalIsVisible(true);
      setModalDataLoaded(false);

      const data = await service.getTourDetails(id);

      setModalData(data);
      setModalDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledCardList data-testid="tour_cards">
        {!!data.length ? (
          data.map((tour) => (
            <TourCard data={tour} key={tour.id} showTourDetails={showTourDetails} />
          ))
        ) : (
          <ErrorSection message="Your search did not match any tours" code="empty_search" />
        )}
      </StyledCardList>

      {modalIsVisible && (
        <Modal isVisible={modalIsVisible} hideModal={hideModal}>
          {errorCode ? (
            <ErrorSection code={errorCode} />
          ) : modalDataLoaded ? (
            <TourDetails data={modalData} />
          ) : (
            <SpinnerLoading />
          )}
        </Modal>
      )}
    </>
  );
};
