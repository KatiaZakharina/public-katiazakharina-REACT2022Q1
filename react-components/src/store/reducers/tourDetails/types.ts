import { RequestErrorType, TourDetailsType } from 'services/types';

export type DetailsState = {
  id: null | string;
  details: TourDetailsType | null;
  needToLoad: boolean;
  loading: boolean;
  error: RequestErrorType | Error | null;
};
