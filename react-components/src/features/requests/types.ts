export type TourFormData = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  destination: string;
  withChildren: boolean;
  pcr: File[];
  getNotification: boolean;
};

export type RequestsState = {
  requests: TourFormData[];
};
