import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { cardInfoData } from './CardInfo/CardInfo';
import { Card } from './Card';
import { TourData } from '../../../../db/ToursDataType';

describe('Card', () => {
  const data: TourData = {
    id: 'a5d323b1-374c-4b7e-bd13-984f5236e0ff',
    accommodation: 'Whiskey Bravo Lima Hotel',
    rating: 5,
    city: 'Ribnica na Pohorju',
    country: 'Romania',
    img: 'img1.jpg',
    price: 1000,
    duration: 7,
  };

  it('renders CardLabels', () => {
    render(<Card data={data} />);

    expect(screen.getByText(`${data.price}$`)).toBeInTheDocument();
    expect(screen.getByText(data.city)).toBeInTheDocument();
  });

  it('renders CardInfo', () => {
    render(<Card data={data} />);

    cardInfoData.forEach((info) =>
      expect(
        screen.getByText(`${data[info.name]}${info.text ? ' ' + info.text : ''}`)
      ).toBeInTheDocument()
    );
  });

  it('renders CardTitle', () => {
    render(<Card data={data} />);
    expect(screen.getByText(data.accommodation)).toBeInTheDocument();
  });

  it('renders CardImg', () => {
    render(<Card data={data} />);

    const img = screen.getByAltText(data.accommodation) as HTMLImageElement;
    expect(img.src).toMatch(data.img);
  });
});
