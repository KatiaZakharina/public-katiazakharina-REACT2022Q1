import '@testing-library/react';
import '@testing-library/jest-dom';

import { InfoMessage } from './InfoMessage';
import { render, screen } from '@testing-library/react';

describe('InfoMessage', () => {
  it('should render success message', () => {
    const hideAlert = jest.fn();
    render(<InfoMessage success={true} hideAlert={hideAlert} />);

    expect(screen.getByText('Data saved successfully')).toBeInTheDocument();
  });

  it('should render wrong error', () => {
    const hideAlert = jest.fn();
    render(<InfoMessage success={false} hideAlert={hideAlert} />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
