import { useCallback, useEffect, useMemo, useState } from 'react';

import { Search } from './Search/Search';
import { SearchPanel, StyledTours } from './StyledTours';
import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { CardList } from './CardList/CardList';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourService } from 'services/TourService';
import { FilterPanel } from './FilterPanel/FilterPanel';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { FilterData } from 'features/tours/types';
import { changeTours, setTotalPages } from 'features/tours/actions';

export const Tours = () => {
  const search = useAppSelector((state) => state.toursReducer.searchValue);
  const filters = useAppSelector((state) => state.toursReducer.filters);
  const currentPage = useAppSelector((state) => state.toursReducer.pagination.current);
  const tours = useAppSelector((state) => state.toursReducer.tours);

  const dispatch = useAppDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  const service = useMemo(() => new TourService(setErrorCode), []);
  const defaultCity = 'paris';

  const updateTours = useCallback(
    async (city: string, filters: FilterData, page) => {
      if (!city.length) {
        city = defaultCity;
      }
      try {
        setIsLoaded(false);
        const { data, total } = await service.getBriefToursInfo(city, filters, page);

        dispatch(changeTours(data));

        dispatch(setTotalPages(total));
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    },
    [service]
  );

  useEffect(() => {
    const update = async () => {
      await updateTours(search, filters, currentPage);
    };
    update();
  }, [search, filters, currentPage, updateTours]);

  return (
    <div id="tours">
      {errorCode ? (
        <ErrorSection code={errorCode} />
      ) : (
        <StyledTours>
          <SearchPanel>
            <Search disabled={!isLoaded} />
            <FilterPanel />
          </SearchPanel>

          {!isLoaded ? <SpinnerLoading /> : <CardList data={tours} />}
        </StyledTours>
      )}
    </div>
  );
};
