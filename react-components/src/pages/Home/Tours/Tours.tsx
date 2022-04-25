import { useCallback, useEffect, useMemo, useState } from 'react';

import { TourData } from 'services/ToursDataType';
import { Search } from './Search/Search';
import { SearchPanel, StyledTours } from './StyledTours';
import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { CardList } from './CardList/CardList';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourService } from 'services/TourService';
import { useAppContext } from 'AppContextProvider';
import { FilterPanel } from './FilterPanel/FilterPanel';
import { FilterData } from './FilterPanel/FilterFields';

export const Tours = () => {
  const { search, filters, currentPage, setTotalPages } = useAppContext();

  const [data, setData] = useState<Array<TourData>>([]);
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

        setData(data);

        setTotalPages(total);
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

          {!isLoaded ? <SpinnerLoading /> : <CardList data={data} />}
        </StyledTours>
      )}
    </div>
  );
};
