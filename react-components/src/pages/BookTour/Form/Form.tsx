import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { StyledForm, FormBody, FormHeader, FormHeading, FormWrapper, Label } from './StyledForm';
import { Button, Input, customInputs, CustomInputs } from './Inputs';
import { inputFields, TourFormData } from './FormFields';
import { InfoMessage } from './InfoMessage/InfoMessage';
import { ValidationAlert } from './Inputs/Input/StyledInput';

type FormProps = { onUpdateRequests: (data: TourFormData) => void };

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

export const Form = ({ onUpdateRequests }: FormProps) => {
  const [alertIsVisible, setAlertIsVisible] = useState(false);

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
    onUpdateRequests(data);
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

          <Button type="submit" disabled={!isValid}>
            Help me plan my trip
          </Button>
        </FormBody>
      </StyledForm>
    </FormWrapper>
  );
};
