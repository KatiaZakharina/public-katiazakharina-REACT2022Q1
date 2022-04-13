import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { cardInfoData } from './CardInfo/CardInfo';
import { TourCard } from './TourCard';
import { TourData } from 'services/ToursDataType';

describe('TourCard', () => {
  const data: TourData = {
    id: 'a5d323b1-374c-4b7e-bd13-984f5236e0ff',
    accommodation: 'Whiskey Bravo Lima Hotel',
    rating: 5,
    city: 'Ribnica na Pohorju',
    country: 'Romania',
    img: 'img.jpg',
    price: 1000,
    landmarks: '2 miles from City Center',
  };

  let showTourDetails: jest.Mock;

  beforeEach(() => {
    showTourDetails = jest.fn();
  });

  it('renders CardLabels', () => {
    render(<TourCard data={data} showTourDetails={showTourDetails} />);
    expect(screen.getByText(`${data.price}$`)).toBeInTheDocument();
    expect(screen.getByText(data.city)).toBeInTheDocument();
  });

  it('renders CardInfo', () => {
    render(<TourCard data={data} showTourDetails={showTourDetails} />);

    cardInfoData.forEach((info) =>
      expect(
        screen.getByText(`${data[info.name]}${info.text ? ` ${info.text}` : ''}`)
      ).toBeInTheDocument()
    );
  });

  it('renders CardTitle', () => {
    render(<TourCard data={data} showTourDetails={showTourDetails} />);
    expect(screen.getByText(data.accommodation)).toBeInTheDocument();
  });

  it('renders CardImg', () => {
    render(<TourCard data={data} showTourDetails={showTourDetails} />);

    const img = screen.getByAltText(data.accommodation) as HTMLImageElement;
    expect(img.src).toMatch(data.img);
  });

  test('if click it calls showTourDetails', () => {
    render(<TourCard data={data} showTourDetails={showTourDetails} />);

    const card = screen.getByTestId('tour_card');
    userEvent.click(card);

    expect(showTourDetails).toBeCalledWith(data.id);
  });
});
