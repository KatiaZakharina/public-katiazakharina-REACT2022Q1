import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

import { formatYmd } from 'services/dateFormatter';
import { customInputs } from './Inputs';

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

export interface FormProps<T> extends InputHTMLAttributes<T> {
  register?: RegisterOptions;
  labelText?: string;
  type: HTMLInputTypeAttribute | keyof typeof customInputs;
  options?: string[];
}

export type FormFields<T> = { [key in keyof TourFormData]: FormProps<T> };

export const inputFields: FormFields<HTMLInputElement | HTMLSelectElement> = {
  firstName: {
    id: 'firstName',
    type: 'text',
    placeholder: 'First name',
    labelText: 'First name',
    register: {
      required: { value: true, message: 'This is a required field' },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁёs]{3,20}/,
        message: 'Letters only, from 3 to 20 characters',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
      minLength: {
        value: 2,
        message: 'This input exceed maxLength.',
      },
    },
  },
  lastName: {
    id: 'lastName',
    type: 'text',
    placeholder: 'Last name',
    labelText: 'Last name',
    register: {
      required: { value: true, message: 'This is a required field' },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁёs]{3,20}/,
        message: 'Letters only, from 3 to 20 characters',
      },
      maxLength: {
        value: 30,
        message: 'This input exceed maxLength.',
      },
      minLength: {
        value: 2,
        message: 'This input exceed maxLength.',
      },
    },
  },
  email: {
    id: 'email',
    type: 'email',
    placeholder: 'email@gmail.com',
    labelText: 'Email address',
    register: {
      required: { value: true, message: 'This is a required field' },
    },
  },
  date: {
    id: 'date',
    type: 'date',
    labelText: 'Departure Data',
    register: {
      required: { value: true, message: 'This is a required field' },
      min: {
        value: formatYmd(new Date()),
        message: 'Only a date in the future',
      },
    },
  },
  destination: {
    id: 'destination',
    labelText: 'Destination',
    type: 'select',
    options: ['Country', 'France', 'Egypt', 'Greece'],
    register: {
      required: 'This is a required field',
    },
  },
  withChildren: {
    id: 'withChildren',
    labelText: "I'm traveling with children",
    type: 'checkbox',
  },
  pcr: {
    id: 'pcr',
    type: 'file',
    labelText: 'Upload a photo of the PCR test',
    register: {
      validate: {
        acceptedFormats: (files) =>
          ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
          'Only PNG, JPEG and GIF',
      },
    },
  },
  getNotification: {
    id: 'getNotification',
    type: 'switch',
    labelText: 'I want to receive notifications about promotions',
  },
};
