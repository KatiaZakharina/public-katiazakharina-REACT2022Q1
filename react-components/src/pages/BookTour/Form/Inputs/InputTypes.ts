import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormProps, TourFormData } from '../FormFields';

export interface InputProps<T> extends InputHTMLAttributes<T> {
  name: keyof TourFormData;
  register: UseFormRegister<TourFormData>;
  inputField: FormProps<T>;
}
