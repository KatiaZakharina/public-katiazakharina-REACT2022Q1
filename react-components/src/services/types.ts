export type CustomErrorCode = 'empty_search';

export interface RequestErrorType extends Error {
  code?: number | CustomErrorCode;
}

export type TourData = {
  id: string;
  accommodation: string;
  rating?: number;
  city: string;
  country: string;
  img: string;
  price?: number;
  landmarks?: string;
};

export interface HotelI {
  id: number;
  name?: string;
  starRating?: number;
  address?: {
    locality?: string;
    countryName?: string;
  };
  landmarks?: Array<{
    label: string;
    distance: string;
  }>;
  ratePlan?: {
    price?: {
      exactCurrent?: number;
    };
  };
  optimizedThumbUrls?: {
    srpDesktop?: string;
  };
}

type TourDescriptionAmenities = {
  heading: string;
  listItems: Array<{
    heading: string;
    listItems: string[];
  }>;
};

export type TourDescriptionType = {
  name: string;
  rating: number;
  price: string;
  address: string;
  tagline: string[];
  guestReviews: string;
  neighborhood: string;
  amenities: TourDescriptionAmenities[];
  optionalExtras: string[];
  arrivingLeaving: string[];
  img?: string;
};

export type TourDetailsType = TourDescriptionType & { img: string };
