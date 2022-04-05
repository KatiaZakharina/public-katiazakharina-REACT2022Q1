import React, { FormEvent, MutableRefObject } from 'react';

import { FormBody, Fieldset, FormHeader, FormHeading, FormWrapper } from './StyledForm';
import { Button, Input, ToggleSwitch, Checkbox } from './Inputs';

import toursData from 'db/tours_data.json';
import { InfoMessage } from './InfoMessage/InfoMessage';

type FieldsI =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'date'
  | 'destination'
  | 'withChildren'
  | 'passport'
  | 'getNotification';

type RefsI = MutableRefObject<HTMLInputElement> & MutableRefObject<HTMLSelectElement>;

type InputsI = {
  [key in FieldsI]: RefsI;
};

export type TourFormData = { [key in FieldsI]: string | boolean };

type FormProps = { onSubmit: (data: TourFormData) => void };
type FormState = { isValid: boolean; alertIsVisible: boolean };

export class Form extends React.Component<FormProps, FormState> {
  private fields: Array<FieldsI>;
  private inputs: InputsI;

  constructor(props: FormProps) {
    super(props);

    this.fields = [
      'firstName',
      'lastName',
      'email',
      'date',
      'destination',
      'withChildren',
      'passport',
      'getNotification',
    ];

    this.state = { isValid: false, alertIsVisible: false };

    this.inputs = this.fields.reduce((obj, fieldName) => {
      obj[fieldName] = React.createRef() as RefsI;

      return obj;
    }, {} as InputsI);
  }

  checkValidity = (data: TourFormData): boolean => {
    console.log(this.state.isValid, 'check', this);

    const isValid = true;

    this.setState(() => {
      return { isValid: isValid };
    });

    return isValid;
  };

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

    console.log(this.state.isValid, 'before', this, this.state);

    const isValid = this.checkValidity(data); //FIXME: async setState

    this.showAlert();
    this.clearInputs();

    if (!isValid) {
      return;
    }
    this.props.onSubmit(data);
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
    console.log(this.state.isValid, 'render', this);
    return (
      <FormWrapper onSubmit={this.onSubmit}>
        {!this.state.alertIsVisible || (
          <InfoMessage success={this.state.isValid} hideAlert={this.hideAlert} />
        )}
        <FormHeader>
          <FormHeading>Your Dream Vacation in 3 simple steps</FormHeading>
        </FormHeader>

        <FormBody>
          <Fieldset>
            Contact Info
            <Input
              placeholder="First name"
              minLength={3}
              maxLength={20}
              pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
              type="text"
              ref={this.inputs.firstName}
              required
            />
            <Input
              placeholder="Last Name"
              minLength={3}
              maxLength={20}
              pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
              type="text"
              ref={this.inputs.lastName}
              required
            />
          </Fieldset>

          <Fieldset>
            Email Address
            <Input placeholder="email@gmail.com" type="email" ref={this.inputs.email} required />
          </Fieldset>

          <Fieldset>
            Departure Date
            <Input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              ref={this.inputs.date}
              required
            />
          </Fieldset>

          <Fieldset>
            Destination
            <Input as="select" ref={this.inputs.destination} required>
              <option value="" hidden>
                Country
              </option>

              {Array.from(new Set(toursData.map((data) => data.country))).map((country, idx) => (
                <option value={country} key={idx}>
                  {country}
                </option>
              ))}
            </Input>
          </Fieldset>

          <Fieldset>
            <Checkbox ref={this.inputs.withChildren} />
            I&apos;m traveling with children
          </Fieldset>

          <Fieldset>
            Upload a passport photo
            <Input
              type="file"
              accept=".jpg, .png, .jpeg, .webp"
              ref={this.inputs.passport}
              required
            />
          </Fieldset>

          <Fieldset>
            <ToggleSwitch ref={this.inputs.getNotification} />I want to receive notifications about
            promotions
          </Fieldset>

          <Fieldset>
            <Button type="submit">
              {/* disabled={!this.state.isValid} */}
              Help me plan my trip
            </Button>
          </Fieldset>
        </FormBody>
      </FormWrapper>
    );
  }
}
