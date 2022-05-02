import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourDetails } from 'pages/TourPage/TourDetails/TourDetails';
import { StyledTourPage } from './StyledTourPage';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  disableNeedToLoad,
  fetchDetails,
  setHotelId,
} from 'store/reducers/tourDetails/detailsSlice';
import { RequestError } from 'services/TourService';

type TourPageParam = { tourId: string };

export const TourPage = () => {
  const { tourId } = useParams<TourPageParam>();

  const { details, error, loading } = useAppSelector((state) => state.detailsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHotelId(tourId));
    dispatch(fetchDetails());
  }, [tourId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(disableNeedToLoad());
    };
  }, [dispatch]);

  return (
    <StyledTourPage data-testid="tour_details">
      {error ? (
        <ErrorSection
          message={error.message}
          code={error instanceof RequestError ? error.code : undefined}
        />
      ) : !loading ? (
        <TourDetails data={details} />
      ) : (
        <SpinnerLoading />
      )}
    </StyledTourPage>
  );
};
