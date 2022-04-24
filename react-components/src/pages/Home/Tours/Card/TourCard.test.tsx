import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { cardInfoData } from './CardInfo/CardInfo';
import { TourCard } from './TourCard';
import { TourData } from 'services/ToursDataType';
import { renderWithRouter } from 'test/__mocks__/renders';

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

  it('renders CardLabels', () => {
    renderWithRouter(<TourCard data={data} />);
    expect(screen.getByText(`${data.price}$`)).toBeInTheDocument();
    expect(screen.getByText(data.city)).toBeInTheDocument();
  });

  it('renders CardInfo', () => {
    renderWithRouter(<TourCard data={data} />);

    cardInfoData.forEach((info) =>
      expect(
        screen.getByText(`${data[info.name]}${info.text ? ` ${info.text}` : ''}`)
      ).toBeInTheDocument()
    );
  });

  it('renders CardTitle', () => {
    renderWithRouter(<TourCard data={data} />);
    expect(screen.getByText(data.accommodation)).toBeInTheDocument();
  });

  it('renders CardImg', () => {
    renderWithRouter(<TourCard data={data} />);

    const img = screen.getByAltText(data.accommodation) as HTMLImageElement;
    expect(img.src).toMatch(data.img);
  });

  test('if click it open TourPage', () => {
    renderWithRouter(<TourCard data={data} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/tours/${data.id}`);
  });
});
