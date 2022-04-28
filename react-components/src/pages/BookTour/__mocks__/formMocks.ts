import userEvent from '@testing-library/user-event';

import { fields } from '../Form/Form';
import { TourFormData } from 'features/requests/types';

type InputsEls = { [key in keyof TourFormData]: HTMLInputElement };

export const fakeImage = [new File(['image'], 'image.png', { type: 'image/png' })];

export function getInputs(container: HTMLElement): InputsEls {
  return fields.reduce((acc, curr) => {
    const input = container.querySelector(`[name=${curr}]`) as HTMLInputElement;

    if (input) {
      acc[curr] = input;
    }
    return acc;
  }, {} as InputsEls);
}

export async function fillInputs(data: TourFormData, inputs: InputsEls) {
  userEvent.type(inputs.firstName, data.firstName);
  userEvent.type(inputs.lastName, data.lastName);
  userEvent.type(inputs.email, data.email);
  userEvent.type(inputs.date, data.date);

  userEvent.selectOptions(inputs.destination, data.destination);

  const file = data.pcr;
  userEvent.upload(inputs.pcr, file);

  if (data.getNotification) userEvent.click(inputs.getNotification);
  if (data.withChildren) userEvent.click(inputs.withChildren);
}
