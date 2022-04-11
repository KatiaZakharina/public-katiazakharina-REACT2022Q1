import React, { FormEvent, MutableRefObject } from 'react';

import { FormBody, Fieldset, FormHeader, FormHeading, FormWrapper, Label } from './StyledForm';
import { Button, Input, ToggleSwitch, Checkbox } from './Inputs';

import { InfoMessage } from './InfoMessage/InfoMessage';
import { formatYmd } from 'services/dateFormatter';

type RefsI = MutableRefObject<HTMLInputElement> & MutableRefObject<HTMLSelectElement>;

type InputsI = {
  [key in keyof TourFormData]: RefsI;
};

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

type FormProps = { onSubmit: (data: TourFormData) => void };
type FormState = { alertIsVisible: boolean };

export class Form extends React.Component<FormProps, FormState> {
  private inputs: InputsI;
  private toursCountry: Array<string>;

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

    this.toursCountry = ['France', 'Egypt', 'Greece'];
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
      <FormWrapper onSubmit={this.onSubmit} name="book_tour">
        {this.state.alertIsVisible && <InfoMessage success={true} hideAlert={this.hideAlert} />}

        <FormHeader>
          <FormHeading>Your Dream Vacation in 3 simple steps</FormHeading>
        </FormHeader>

        <FormBody>
          <Fieldset>
            <legend>Contact Info</legend>
            <Input
              placeholder="First name"
              id="firstName"
              name="firstName"
              minLength={3}
              maxLength={20}
              pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
              title="Letters only, from 3 to 20 characters"
              type="text"
              ref={this.inputs.firstName}
              required
            />
            <Input
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              minLength={3}
              maxLength={20}
              pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
              title="Letters only, from 3 to 20 characters"
              type="text"
              ref={this.inputs.lastName}
              required
            />
          </Fieldset>

          <Label htmlFor="email">
            Email Address
            <Input
              placeholder="email@gmail.com"
              id="email"
              name="email"
              type="email"
              ref={this.inputs.email}
              required
            />
          </Label>

          <Label htmlFor="date">
            Departure Date
            <Input
              type="date"
              id="date"
              name="date"
              min={formatYmd(new Date())}
              ref={this.inputs.date}
              required
            />
          </Label>

          <Label htmlFor="destination">
            Destination
            <Input
              as="select"
              id="destination"
              name="destination"
              ref={this.inputs.destination}
              required
            >
              <option value="" hidden>
                Country
              </option>

              {this.toursCountry.map((country, idx) => (
                <option value={country} key={idx}>
                  {country}
                </option>
              ))}
            </Input>
          </Label>

          <Label htmlFor="withChildren">
            <Checkbox
              idValue="withChildren"
              nameValue="withChildren"
              ref={this.inputs.withChildren}
            />
            I&apos;m traveling with children
          </Label>

          <Label htmlFor="file">
            Upload a photo of the PCR test
            <Input
              type="file"
              id="pcr"
              name="pcr"
              accept=".jpg, .png, .jpeg, .webp"
              ref={this.inputs.pcr}
              required
            />
          </Label>

          <Label htmlFor="getNotification">
            <ToggleSwitch
              idValue="getNotification"
              nameValue="getNotification"
              ref={this.inputs.getNotification}
            />
            I want to receive notifications about promotions
          </Label>

          <Button type="submit">Help me plan my trip</Button>
        </FormBody>
      </FormWrapper>
    );
  }
}
