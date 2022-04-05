import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from 'App';

describe('App', () => {
  it('renders Home by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('home_page')).toBeInTheDocument();
  });

  it('renders NotFoundPage if there is no matching path', () => {
    render(
      <MemoryRouter initialEntries={['/some/wrong/path']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('hero_section')).toHaveTextContent('Sorry, Page Not Found');
  });

  it('renders BookTour in book-tour path', () => {
    render(
      <MemoryRouter initialEntries={['/book-tour']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('book_tour_page')).toBeInTheDocument();
  });

  it('renders AboutUs in about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('about_page')).toBeInTheDocument();
  });
});
