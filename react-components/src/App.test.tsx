import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import App from 'App';
import { customRender } from 'test/__mocks__/customRender';

describe('App', () => {
  it('renders Home by default', () => {
    customRender(<App />, '/');
    expect(screen.getByTestId('home_page')).toBeInTheDocument();
  });

  it('renders NotFoundPage if there is no matching path', () => {
    customRender(<App />, '/some/wrong/path');
    expect(screen.getByTestId('hero_section')).toHaveTextContent('Sorry, Page Not Found');
  });

  it('renders BookTour in book-tour path', () => {
    customRender(<App />, '/book-tour');
    expect(screen.getByTestId('book_tour_page')).toBeInTheDocument();
  });

  it('renders AboutUs in about path', () => {
    customRender(<App />, '/about');
    expect(screen.getByTestId('about_page')).toBeInTheDocument();
  });

  it('renders TourPage', () => {
    customRender(<App />, '/tours/1234');
    expect(screen.getByTestId('tour_details')).toBeInTheDocument();
  });
});
