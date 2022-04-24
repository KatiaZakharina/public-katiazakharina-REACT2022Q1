import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourDetails } from 'pages/Home/Tours/TourDetails/TourDetails';
import { TourDetailsType } from 'services/ToursDataType';
import { TourService } from 'services/TourService';
import { StyledTourPage } from './StyledTourPage';

type TourPageParam = { tourId: string };

export const TourPage = () => {
  const { tourId } = useParams<TourPageParam>();
  const [details, setDetails] = useState<TourDetailsType | null>(null);
  const [detailsLoaded, setDetailsLoaded] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  const service = useMemo(() => new TourService(setErrorCode), []);

  useEffect(() => {
    const showTourDetails = async (id?: string) => {
      try {
        setDetailsLoaded(false);

        const data = await service.getTourDetails(id);

        setDetails(data);
        setDetailsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    showTourDetails(tourId);
  }, [tourId, service]);

  return (
    <StyledTourPage data-testid="tour_details">
      {errorCode ? (
        <ErrorSection code={errorCode} />
      ) : detailsLoaded ? (
        <TourDetails data={details} />
      ) : (
        <SpinnerLoading />
      )}
    </StyledTourPage>
  );
};
