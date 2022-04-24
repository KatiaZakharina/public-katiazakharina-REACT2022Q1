import { createContext, ReactNode, useContext, useReducer } from 'react';

import { TourFormData } from 'pages/BookTour/Form/FormFields';

type AppContextValue = {
  search: string;
  setSearch: (text: string) => void;
  requests: TourFormData[];
  setRequests: (card: TourFormData[]) => void;
};

const AppContext = createContext({} as AppContextValue);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const enum ActionList {
  NEW_SEARCH = 'new-search',
  ADD_REQUEST = 'add-request',
}

type State = { search: string; requests: TourFormData[] };
type Action =
  | { type: ActionList.NEW_SEARCH; text: string }
  | { type: ActionList.ADD_REQUEST; cards: TourFormData[] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionList.NEW_SEARCH:
      return { ...state, search: action.text };
    case ActionList.ADD_REQUEST:
      return { ...state, requests: action.cards };
    default:
      return state;
  }
};

type Props = { children: ReactNode };

export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    search: localStorage.getItem('tours_search') ?? '',
    requests: JSON.parse(localStorage.getItem('tour_requests') ?? '[]'),
  });

  const setSearch = (text: string) => {
    dispatch({ type: ActionList.NEW_SEARCH, text });
  };

  const setRequests = (cards: TourFormData[]) => {
    dispatch({ type: ActionList.ADD_REQUEST, cards });
  };

  return (
    <AppContext.Provider
      value={{ search: state.search, setSearch, requests: state.requests, setRequests }}
    >
      {children}
    </AppContext.Provider>
  );
};
