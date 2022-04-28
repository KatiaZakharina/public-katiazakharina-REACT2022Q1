import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { customRender } from 'test/__mocks__/customRender';
import { invalidData, validData } from '../__mocks__/formData';
import { fillInputs, getInputs } from '../__mocks__/formMocks';
import { Form } from './Form';

describe('Form', () => {
  it('is rendered correctly', () => {
    const { container } = customRender(<Form />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    Object.values(getInputs(container)).forEach((input) => expect(input).toBeInTheDocument());
    expect(screen.getByRole('button', { name: 'Help me plan my trip' })).toBeInTheDocument();
  });
});

describe('Form validation', () => {
  test('if all input data is required', () => {
    const { container } = customRender(<Form />);

    const inputs = getInputs(container);

    Object.values(inputs).forEach(
      (input) => expect(input.type === 'checkbox').toBeTruthy || expect(input).toBeRequired()
    );
  });

  test('if submission is disabled if the data is incorrect', async () => {
    const { container } = customRender(<Form />);

    const inputs = getInputs(container);

    await waitFor(() => {
      fillInputs(invalidData, inputs);
    });

    expect(screen.getByRole('button', { name: 'Help me plan my trip' })).toBeDisabled();
  });
});

describe('when filling out the Form', () => {
  it('display data correctly', async () => {
    const { container } = customRender(<Form />);

    const inputs = getInputs(container);

    await waitFor(() => {
      fillInputs(validData, inputs);
    });

    expect(inputs.pcr.files?.[0].name).toBe(validData.pcr[0].name);

    const dataWithoutFileInput = { ...validData, pcr: '' };
    expect(screen.getByRole('form')).toHaveFormValues(dataWithoutFileInput);
  });
});

describe('Form submit', () => {
  it('cleans inputs', async () => {
    const { container } = customRender(<Form />);
    const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });

    const inputs = getInputs(container);

    await waitFor(() => {
      fillInputs(validData, inputs);
    });

    await waitFor(() => {
      userEvent.click(submitButton);
    });

    expect(screen.getByRole('form')).toHaveFormValues({});
  });

  it('shows and hides success message', async () => {
    jest.useFakeTimers();

    const { container } = customRender(<Form />);

    const inputs = getInputs(container);
    await waitFor(() => {
      fillInputs(validData, inputs);
    });

    const submitButton = screen.getByRole('button', { name: 'Help me plan my trip' });
    await waitFor(() => {
      userEvent.click(submitButton);
    });

    expect(screen.getByText('Data saved successfully')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByText('Data saved successfully')).toBeNull();

    jest.useRealTimers();
  });
});
