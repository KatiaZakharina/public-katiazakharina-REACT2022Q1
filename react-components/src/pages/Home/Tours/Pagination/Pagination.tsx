import { ChangeEvent } from 'react';

import { useAppContext } from 'AppContextProvider';
import { Button, Input } from 'components/Inputs';
import { StyledPagination } from './StyledPagination';

export const defaultPagination = { current: 1, total: 3 };

export type PaginationData = { current: number; total: number };

export const Pagination = () => {
  const { currentPage, totalPages, setCurrentPage } = useAppContext();

  const increment = () => {
    setCurrentPage(currentPage + 1);
  };
  const decrement = () => {
    setCurrentPage(currentPage - 1);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(+e.target.value);
  };

  const isFirst = () => currentPage === 1;
  const isLast = () => currentPage === totalPages;

  return (
    <StyledPagination>
      <Button onClick={decrement} disabled={isFirst()}>
        {'<'}
      </Button>
      <Input
        name="pagination"
        inputField={{ type: 'number', value: currentPage }}
        onChange={onChange}
        min={1}
        max={totalPages}
      />
      <span>/ {totalPages}</span>
      <Button onClick={increment} disabled={isLast()}>
        {'>'}
      </Button>
    </StyledPagination>
  );
};
