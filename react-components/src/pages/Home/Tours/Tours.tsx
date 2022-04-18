import { useCallback, useEffect, useMemo, useState } from 'react';

import { TourData } from 'services/ToursDataType';
import { Search } from './Search/Search';
import { StyledTours } from './StyledTours';
import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { CardList } from './CardList/CardList';
import { SpinnerLoading } from 'components/helpers/Spinner/StyledSpinner';
import { TourService } from 'services/TourService';

export const Tours = () => {
  const [data, setData] = useState<Array<TourData>>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [search, setSearch] = useState(localStorage.getItem('tours_search') ?? '');

  const service = useMemo(() => new TourService(setErrorCode), []);
  const defaultCity = 'paris';

  const updateTours = useCallback(
    async (city: string) => {
      if (!city.length) {
        city = defaultCity;
      }
      try {
        setIsLoaded(false);
        const data = await service.getBriefToursInfo(city);
        setData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    },
    [service]
  );

  useEffect(() => {
    const update = async () => {
      await updateTours(search);
    };
    update();
  }, [search, updateTours]);

  return (
    <>
      {errorCode ? (
        <ErrorSection code={errorCode} />
      ) : (
        <StyledTours>
          <Search onUpdateSearch={setSearch} disabled={!isLoaded} />

          {!isLoaded ? <SpinnerLoading /> : <CardList data={data} />}
        </StyledTours>
      )}
    </>
  );
};
