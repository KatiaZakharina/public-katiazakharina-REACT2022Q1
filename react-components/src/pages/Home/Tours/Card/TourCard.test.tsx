import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { cardInfoData } from './CardInfo/CardInfo';
import { TourCard } from './TourCard';
import { TourData } from 'services/ToursDataType';
import { customRender } from 'test/__mocks__/customRender';

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
    customRender(<TourCard data={data} />);
    expect(screen.getByText(`${data.price}$`)).toBeInTheDocument();
    expect(screen.getByText(data.city)).toBeInTheDocument();
  });

  it('renders CardInfo', () => {
    customRender(<TourCard data={data} />);

    cardInfoData.forEach((info) =>
      expect(
        screen.getByText(`${data[info.name]}${info.text ? ` ${info.text}` : ''}`)
      ).toBeInTheDocument()
    );
  });

  it('renders CardTitle', () => {
    customRender(<TourCard data={data} />);
    expect(screen.getByText(data.accommodation)).toBeInTheDocument();
  });

  it('renders CardImg', () => {
    customRender(<TourCard data={data} />);

    const img = screen.getByAltText(data.accommodation) as HTMLImageElement;
    expect(img.src).toMatch(data.img);
  });

  test('if click it open TourPage', () => {
    customRender(<TourCard data={data} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/tours/${data.id}`);
  });
});
