import { useEffect } from 'react';

import { Search } from './Search/Search';
import { SearchPanel, StyledTours } from './StyledTours';
import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { CardList } from './CardList/CardList';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { FilterPanel } from './FilterPanel/FilterPanel';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { disableNeedToLoad, fetchTours } from 'store/reducers/tours/tourSlice';
import { RequestError } from 'services/TourService';

export const Tours = () => {
  const currentPage = useAppSelector((state) => state.toursReducer.pagination.current);
  const { filters, tours, error, loading } = useAppSelector((state) => state.toursReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const update = async () => {
      dispatch(fetchTours());
    };
    update();
  }, [filters, currentPage, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(disableNeedToLoad());
    };
  }, [dispatch]);

  return (
    <div id="tours">
      {error ? (
        <ErrorSection
          message={error?.message}
          code={error instanceof RequestError ? error.code : undefined}
        />
      ) : (
        <StyledTours>
          <SearchPanel>
            <Search disabled={loading} />
            <FilterPanel />
          </SearchPanel>

          {loading ? <SpinnerLoading /> : <CardList data={tours} />}
        </StyledTours>
      )}
    </div>
  );
};
