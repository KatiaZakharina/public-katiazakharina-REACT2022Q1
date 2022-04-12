import { InputHTMLAttributes } from 'react';

export type TourFormData = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  destination: string;
  withChildren: boolean;
  pcr: string;
  getNotification: boolean;
};

interface FormProps<T> extends InputHTMLAttributes<T> {
  id: string;
  name: string;
}

type FormFields<T> = { [key in keyof Partial<TourFormData>]: FormProps<T> };

export const inputFields: FormFields<HTMLInputElement> = {
  firstName: {
    id: 'firstName',
    name: 'firstName',
    type: 'text',
    placeholder: 'First name',
    minLength: 3,
    maxLength: 20,
    pattern: '^[A-Za-zА-Яа-яЁёs]{3,20}',
    title: 'Letters only, from 3 to 20 characters',
    required: true,
  },
  lastName: {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last NAme',
    minLength: 3,
    maxLength: 20,
    pattern: '^[A-Za-zА-Яа-яЁёs]{3,20}',
    title: 'Letters only, from 3 to 20 characters',
    required: true,
  },
  email: {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'email@gmail.com',
    required: true,
  },
  date: {
    id: 'date',
    name: 'date',
    type: 'date',
    min: new Date().toISOString().split('T')[0],
    required: true,
  },
  withChildren: {
    id: 'withChildren',
    name: 'withChildren',
  },
  pcr: {
    id: 'pcr',
    name: 'pcr',
    type: 'file',
    accept: '.jpg, .png, .jpeg, .webp',
    required: true,
  },
  getNotification: {
    id: 'getNotification',
    name: 'getNotification',
  },
};

export const selectFields: FormFields<HTMLSelectElement> = {
  destination: {
    id: 'destination',
    name: 'destination',
    required: true,
  },
};
