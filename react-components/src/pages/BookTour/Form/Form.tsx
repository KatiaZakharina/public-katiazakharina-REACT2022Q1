import React, { FormEvent, MutableRefObject } from 'react';

import {
  StyledForm,
  FormBody,
  Fieldset,
  FormHeader,
  FormHeading,
  FormWrapper,
  Label,
} from './StyledForm';
import { Button, Input, ToggleSwitch, Checkbox } from './Inputs';
import { InfoMessage } from './InfoMessage/InfoMessage';
import { inputFields, selectFields, TourFormData } from './FormFields';

import toursData from 'db/tours_data.json';

type RefsI = MutableRefObject<HTMLInputElement> & MutableRefObject<HTMLSelectElement>;

type InputsI = {
  [key in keyof TourFormData]: RefsI;
};

type FormProps = { onSubmit: (data: TourFormData) => void };
type FormState = { alertIsVisible: boolean };

export class Form extends React.Component<FormProps, FormState> {
  private inputs: InputsI;

  static fields: Array<keyof TourFormData> = [
    'firstName',
    'lastName',
    'email',
    'date',
    'destination',
    'withChildren',
    'pcr',
    'getNotification',
  ];

  constructor(props: FormProps) {
    super(props);

    this.state = { alertIsVisible: false };

    this.inputs = Form.fields.reduce((obj, fieldName) => {
      obj[fieldName] = React.createRef() as RefsI;

      return obj;
    }, {} as InputsI);
  }

  showAlert = () => {
    this.setState({
      alertIsVisible: true,
    });
  };

  hideAlert = () => {
    this.setState({
      alertIsVisible: false,
    });
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(
      Object.entries(this.inputs).map(([key, ref]) => [
        key,
        ref.current.type === 'checkbox' ? ref.current.checked : ref.current?.value,
      ])
    ) as TourFormData;

    this.clearInputs();
    this.props.onSubmit(data);
    this.showAlert();
  };

  clearInputs() {
    for (const field in this.inputs) {
      const input = this.inputs[field as keyof InputsI].current;

      if (input?.type === 'checkbox') {
        input.checked = false;
      } else {
        input.value = '';
      }
    }
  }

  render() {
    return (
      <FormWrapper>
        <StyledForm onSubmit={this.onSubmit} name="book_tour">
          {this.state.alertIsVisible && <InfoMessage success={true} hideAlert={this.hideAlert} />}

          <FormHeader>
            <FormHeading>Your Dream Vacation in 3 simple steps</FormHeading>
          </FormHeader>

          <FormBody>
            <Fieldset>
              <legend>Contact Info</legend>
              <Input {...inputFields.firstName} ref={this.inputs.firstName} />
              <Input {...inputFields.lastName} ref={this.inputs.lastName} />
            </Fieldset>

            <Label htmlFor="email">
              Email Address
              <Input {...inputFields.email} ref={this.inputs.email} />
            </Label>

            <Label htmlFor="date">
              Departure Date
              <Input {...inputFields.date} ref={this.inputs.date} />
            </Label>

            <Label htmlFor="destination">
              Destination
              <Input as="select" {...selectFields.destination} ref={this.inputs.destination}>
                <option value="" hidden>
                  Country
                </option>

                {Array.from(new Set(toursData.map((data) => data.country))).map(
                  (country, index) => (
                    <option value={country} key={index}>
                      {country}
                    </option>
                  )
                )}
              </Input>
            </Label>

            <Label htmlFor="withChildren">
              <Checkbox {...inputFields.withChildren} ref={this.inputs.withChildren} />
              I&apos;m traveling with children
            </Label>

            <Label htmlFor="file">
              Upload a photo of the PCR test
              <Input {...inputFields.pcr} ref={this.inputs.pcr} />
            </Label>

            <Label htmlFor="getNotification">
              <ToggleSwitch {...inputFields.getNotification} ref={this.inputs.getNotification} />I
              want to receive notifications about promotions
            </Label>

            <Button type="submit">Help me plan my trip</Button>
          </FormBody>
        </StyledForm>
      </FormWrapper>
    );
  }
}
