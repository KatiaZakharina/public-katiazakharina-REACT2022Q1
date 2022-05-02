import { ChangeEvent } from 'react';

import { Button, Input } from 'components/Inputs';
import { StyledPagination } from './StyledPagination';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCurrentPage } from 'store/reducers/tours/tourSlice';

export const Pagination = () => {
  const currentPage = useAppSelector((state) => state.toursReducer.pagination.current);
  const totalPages = useAppSelector((state) => state.toursReducer.pagination.total);

  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const decrement = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPage(+e.target.value));
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
