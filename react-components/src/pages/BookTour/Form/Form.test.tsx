import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Form, TourFormData } from './Form';
import { passedBrowserValidation } from 'test/__mocks__/passedBrowserValidation';

type InputsEls = { [key in keyof TourFormData]: HTMLInputElement };

export const validData: TourFormData = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  email: 'ivan@gmail.com',
  date: '2022-04-06',
  destination: 'France',
  withChildren: false,
  pcr: 'pcr.jpeg',
  getNotification: true,
};

const invalidData: TourFormData = {
  firstName: 'Iva124',
  lastName: '^&8f#',
  email: 'ivan@gmail.com',
  date: '2022-04-06',
  destination: '',
  withChildren: false,
  pcr: 'pcr.jpeg',
  getNotification: true,
};

const defaultData: TourFormData = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  destination: '',
  withChildren: false,
  pcr: '',
  getNotification: false,
};

export function getInputs(container: HTMLElement): InputsEls {
  return Form.fields.reduce((acc, curr) => {
    const input = container.querySelector(`[name=${curr}]`) as HTMLInputElement;

    if (input) {
      acc[curr] = input;
    }

    return acc;
  }, {} as InputsEls);
}

export function fillInputs(data: TourFormData, inputs: InputsEls) {
  userEvent.type(inputs.firstName, data.firstName);
  userEvent.type(inputs.lastName, data.lastName);
  userEvent.type(inputs.email, data.email);
  userEvent.type(inputs.date, data.date);

  userEvent.selectOptions(inputs.destination, data.destination);

  const file = new File(['pcr'], data.pcr, { type: 'image/png' });
  userEvent.upload(inputs.pcr, file);

  if (data.getNotification) userEvent.click(inputs.getNotification);
  if (data.withChildren) userEvent.click(inputs.withChildren);
}

describe('Form', () => {
  const onSubmit = jest.fn();

  it('is rendered correctly', () => {
    const { container } = render(<Form onSubmit={onSubmit} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    Object.values(getInputs(container)).forEach((input) => expect(input).toBeInTheDocument());
    expect(screen.getByRole('button', { name: 'Help me plan my trip' })).toBeInTheDocument();
  });
});

describe('Form validation', () => {
  const onSubmit = jest.fn();

  test('if all input data is required', () => {
    const { container } = render(<Form onSubmit={onSubmit} />);

    const inputs = getInputs(container);

    Object.values(inputs).forEach(
      (input) => input.type === 'checkbox' || expect(input).toBeRequired()
    );
  });

  test('if submission is disabled if the data is incorrect', () => {
    const onSubmit = jest.fn();

    const { container } = render(<Form onSubmit={onSubmit} />);

    const inputs = getInputs(container);
    fillInputs(invalidData, inputs);

    expect(passedBrowserValidation(container, 'book_tour')).toBeFalsy();
  });
});

describe('when filling out the Form', () => {
  const onSubmit = jest.fn();

  it('display data correctly', () => {
    const { container } = render(<Form onSubmit={onSubmit} />);

    const inputs = getInputs(container);
    fillInputs(validData, inputs);

    expect(inputs.pcr.files?.[0].name).toBe(validData.pcr);

    const dataWithoutFileInput = { ...validData, pcr: '' };
    expect(screen.getByRole('form')).toHaveFormValues(dataWithoutFileInput);
  });
});

describe('Form submit', () => {
  it('cleans inputs', () => {
    const onSubmit = jest.fn();

    const { container } = render(<Form onSubmit={onSubmit} />);
    const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

    const inputs = getInputs(container);
    fillInputs(validData, inputs);

    userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
    expect(screen.getByRole('form')).toHaveFormValues(defaultData);
  });

  it('shows and hides success message', () => {
    const onSubmit = jest.fn();
    jest.useFakeTimers();

    const { container } = render(<Form onSubmit={onSubmit} />);

    const inputs = getInputs(container);
    fillInputs(validData, inputs);

    const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });
    userEvent.click(submitButton);

    expect(screen.getByText('Data saved successfully')).toBeInTheDocument();

    jest.advanceTimersByTime(3000);

    expect(screen.queryByText('Data saved successfully')).toBeNull();

    jest.useRealTimers();
  });
});
