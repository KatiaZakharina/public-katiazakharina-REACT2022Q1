import { createContext, ReactNode, useContext, useReducer } from 'react';

import { TourFormData } from 'pages/BookTour/Form/FormFields';
import { defaultFilters, FilterData } from 'pages/Home/Tours/FilterPanel/FilterFields';

type AppContextValue = {
  search: string;
  setSearch: (text: string) => void;
  requests: TourFormData[];
  setRequests: (card: TourFormData[]) => void;
  filters: FilterData;
  setFilters: (filters: FilterData) => void;
  currentPage: number;
  setCurrentPage: (current: number) => void;
  totalPages: number;
  setTotalPages: (total: number) => void;
};

const AppContext = createContext({} as AppContextValue);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const enum ActionList {
  NEW_SEARCH = 'new-search',
  ADD_REQUEST = 'add-request',
  CHANGE_FILTERS = 'change-filters',
  SET_PAGINATION = 'set-pagination',
  SET_CURRENT = 'set-current',
  SET_TOTAL = 'set-total',
}

type State = {
  search: string;
  requests: TourFormData[];
  filters: FilterData;
  currentPage: number;
  totalPages: number;
};

type Action =
  | { type: ActionList.NEW_SEARCH; text: string }
  | { type: ActionList.ADD_REQUEST; cards: TourFormData[] }
  | { type: ActionList.CHANGE_FILTERS; filters: FilterData }
  | { type: ActionList.SET_CURRENT; current: number }
  | { type: ActionList.SET_TOTAL; total: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionList.NEW_SEARCH:
      return { ...state, search: action.text };
    case ActionList.ADD_REQUEST:
      return { ...state, requests: action.cards };
    case ActionList.CHANGE_FILTERS:
      return { ...state, filters: action.filters };
    case ActionList.SET_CURRENT:
      if (action.current <= state.totalPages && action.current > 0) {
        return { ...state, currentPage: action.current };
      }
      return { ...state, currentPage: action.current };
    case ActionList.SET_TOTAL:
      return { ...state, totalPages: action.total };
    default:
      return state;
  }
};

type Props = { children: ReactNode };

export const AppContextProvider = ({ children }: Props) => {
  const getLocalStorageData = () => {
    const search = localStorage.getItem('tours_search');
    const requests = localStorage.getItem('tour_requests');
    const filters = localStorage.getItem('tour_filters');

    return {
      search: search ?? '',
      requests: requests ? JSON.parse(requests) : [],
      filters: filters ? JSON.parse(filters) : defaultFilters,
      currentPage: 1,
      totalPages: 1,
    };
  };

  const [state, dispatch] = useReducer(reducer, getLocalStorageData());

  const setSearch = (text: string) => {
    dispatch({ type: ActionList.NEW_SEARCH, text });
    localStorage.setItem('tours_search', text);
  };

  const setRequests = (cards: TourFormData[]) => {
    dispatch({ type: ActionList.ADD_REQUEST, cards });
    localStorage.setItem('tour_requests', JSON.stringify(cards));
  };

  const setFilters = (filters: FilterData) => {
    dispatch({ type: ActionList.CHANGE_FILTERS, filters });
    localStorage.setItem('tour_filters', JSON.stringify(filters));
  };

  const setCurrentPage = (current: number) => {
    dispatch({ type: ActionList.SET_CURRENT, current });
  };

  const setTotalPages = (total: number) => {
    dispatch({ type: ActionList.SET_TOTAL, total });
  };

  return (
    <AppContext.Provider
      value={{
        search: state.search,
        setSearch,
        requests: state.requests,
        setRequests,
        filters: state.filters,
        setFilters,
        currentPage: state.currentPage,
        setCurrentPage,
        totalPages: state.totalPages,
        setTotalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
