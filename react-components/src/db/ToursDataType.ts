export type TourData = {
  id: string;
  accommodation: string;
  rating: number;
  city: string;
  country: string;
  img: string;
  price: number;
  duration: number;
};

export type ToursData = Array<TourData>;
