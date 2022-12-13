import '@testing-library/jest-dom';
import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('renders header and footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
