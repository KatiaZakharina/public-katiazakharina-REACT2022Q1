import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { customInputs } from './index';

export interface FormInputProps<Element> extends InputHTMLAttributes<Element> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  inputField: Field<Element>;
}

export interface Field<T> extends InputHTMLAttributes<T> {
  register?: RegisterOptions;
  labelText?: string;
  type: HTMLInputTypeAttribute | keyof typeof customInputs;
  options?: string[];
  values?: string[];
}

export type Fields<ElementType, DataType> = { [key in keyof DataType]: Field<ElementType> };
