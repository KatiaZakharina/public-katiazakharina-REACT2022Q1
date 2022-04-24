import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import App from 'App';
import { renderWithRouter } from 'test/__mocks__/renders';

describe('App', () => {
  it('renders Home by default', () => {
    renderWithRouter(<App />, '/');
    expect(screen.getByTestId('home_page')).toBeInTheDocument();
  });

  it('renders NotFoundPage if there is no matching path', () => {
    renderWithRouter(<App />, '/some/wrong/path');
    expect(screen.getByTestId('hero_section')).toHaveTextContent('Sorry, Page Not Found');
  });

  it('renders BookTour in book-tour path', () => {
    renderWithRouter(<App />, '/book-tour');
    expect(screen.getByTestId('book_tour_page')).toBeInTheDocument();
  });

  it('renders AboutUs in about path', () => {
    renderWithRouter(<App />, '/about');
    expect(screen.getByTestId('about_page')).toBeInTheDocument();
  });

  it('renders TourPage', () => {
    renderWithRouter(<App />, '/tours/1234');
    expect(screen.getByTestId('tour_details')).toBeInTheDocument();
  });
});
