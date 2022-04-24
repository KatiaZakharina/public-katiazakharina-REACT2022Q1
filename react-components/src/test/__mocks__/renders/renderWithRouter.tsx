import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (ui: ReactNode, route?: string) => {
  return render(<MemoryRouter initialEntries={route ? [route] : undefined}>{ui}</MemoryRouter>);
};
