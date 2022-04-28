import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  StyledForm,
  FormBody,
  FormHeader,
  FormHeading,
  FormWrapper,
  SubmitButton,
} from './StyledForm';
import { Input, customInputs, CustomInputs } from 'components/Inputs';
import { ValidationAlert } from 'components/Inputs/Input/StyledInput';
import { Label } from 'components/Inputs/StyledLabel';

import { InfoMessage } from './InfoMessage/InfoMessage';
import { inputFields } from './FormFields';
import { TourFormData } from 'features/requests/types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addRequest } from 'features/requests/actions';

export const fields: Array<keyof TourFormData> = [
  'firstName',
  'lastName',
  'email',
  'date',
  'destination',
  'withChildren',
  'pcr',
  'getNotification',
];

export const Form = () => {
  const [alertIsVisible, setAlertIsVisible] = useState(false);
  const requests = useAppSelector((state) => state.requestsReducer.requests);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TourFormData>({ mode: 'onChange' });

  const hideAlert = () => {
    setAlertIsVisible(false);
  };

  const onSubmit: SubmitHandler<TourFormData> = (data) => {
    reset();
    dispatch(addRequest([...requests, data]));
    setAlertIsVisible(true);
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)} name="book_tour">
        {alertIsVisible && <InfoMessage success={true} hideAlert={hideAlert} />}

        <FormHeader>
          <FormHeading>Your Dream Vacation in 3 simple steps</FormHeading>
        </FormHeader>

        <FormBody>
          {fields.map((name, index) => {
            const type = inputFields[name].type as CustomInputs;
            const InputElement = type in customInputs ? customInputs[type] : Input;
            const error = Array.isArray(errors) ? errors?.[0] : errors;

            return (
              <Label htmlFor={name} key={index} reversed={type == 'checkbox' || type == 'switch'}>
                {inputFields[name].labelText}
                <InputElement name={name} register={register} inputField={inputFields[name]} />
                <ValidationAlert>{error?.[name] ? error?.[name].message : null}</ValidationAlert>
              </Label>
            );
          })}

          <SubmitButton type="submit" disabled={!isValid}>
            Help me plan my trip
          </SubmitButton>
        </FormBody>
      </StyledForm>
    </FormWrapper>
  );
};
