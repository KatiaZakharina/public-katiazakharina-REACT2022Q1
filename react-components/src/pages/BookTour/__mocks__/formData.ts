import { formatYmd } from 'services/dateFormatter';
import { TourFormData } from '../Form/FormFields';
import { fakeImage } from './formMocks';

export const validData: TourFormData = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  email: 'ivan@gmail.com',
  date: formatYmd(new Date()),
  destination: 'France',
  withChildren: false,
  pcr: fakeImage,
  getNotification: true,
};

export const invalidData: TourFormData = {
  firstName: 'Iva124',
  lastName: '^&8f#',
  email: 'ivan@gmail.com',
  date: '2022-04-06',
  destination: '',
  withChildren: false,
  pcr: [],
  getNotification: true,
};
