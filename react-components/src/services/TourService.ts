import axios, { AxiosInstance } from 'axios';

import { HotelI, TourData, TourDescriptionType, TourDetailsType } from './ToursDataType';
import { dateAfter, formatYmd } from './dateFormatter';

import defaultImg from 'assets/cards/default_image.png';
import { FilterData } from 'pages/Home/Tours/FilterPanel/FilterFields';

export class TourService {
  private setErrorCode: (code: number) => void;
  private axios: AxiosInstance;

  private defaultParameters = { locale: 'en_US', currency: 'USD' };

  constructor(setErrorCode: (code: number) => void) {
    this.setErrorCode = setErrorCode;

    this.axios = axios.create({
      baseURL: `https://${process.env.REACT_APP_RAPID_API_HOST}`,
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST as string,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY as string,
      },
    });
  }

  async getResponse(url: string, params: { [key: string]: string }) {
    const query = new URLSearchParams(params).toString();
    const path = `/${url}?${query}`;

    try {
      const response = await this.axios.get(path);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        this.setErrorCode(error.response.status);
        throw Error(`Failed to load ${path}: response status: ${error.response.status}`);
      } else {
        throw Error(`An unexpected error occurred loading ${path}`);
      }
    }
  }

  async getLocationId(city: string): Promise<string | null> {
    const params = {
      query: city,
      ...this.defaultParameters,
    };

    try {
      const response = await this.getResponse('locations/v2/search', params);
      const data = response.data;
      return data?.suggestions?.[0]?.entities?.[0]?.destinationId || null;
    } catch (err) {
      console.error(err);
      throw Error('Failed to load location id');
    }
  }

  async getHotels(
    id: string | null,
    filters: FilterData,
    page: number
  ): Promise<{ hotelsData: Array<HotelI>; totalPages: number }> {
    if (!id) return { hotelsData: [], totalPages: 1 };

    const params = {
      destinationId: id,
      pageNumber: page.toString(),
      pageSize: filters.pageSize.toString(),
      starRatings: filters.rating.toString(),
      checkIn: formatYmd(new Date()),
      checkOut: formatYmd(dateAfter(new Date(), 14)),
      sortOrder: filters.sortOrder,
      ...this.defaultParameters,
    };

    try {
      const response = await this.getResponse('properties/list', params);
      const data = response.data;

      const { results, totalCount } = data?.data?.body?.searchResults;

      const hotelsData = results || [];

      return { hotelsData, totalPages: Math.ceil(totalCount / +filters.pageSize) };
    } catch (err) {
      throw Error('Failed to load hotels');
    }
  }

  async getTourDescription(id: string): Promise<TourDescriptionType> {
    const params = {
      id,
      ...this.defaultParameters,
    };

    try {
      const response = await this.getResponse('properties/get-details', params);
      const data = await response.data;

      const { propertyDescription, atAGlance, guestReviews, amenities, smallPrint } =
        data.data.body;

      return {
        name: propertyDescription.name,
        rating: propertyDescription.starRating,
        price: propertyDescription.featuredPrice.currentPrice.formatted,
        address: propertyDescription.address.fullAddress,
        tagline: propertyDescription.tagline,
        guestReviews: `${guestReviews.brands.formattedRating}/${guestReviews.brands.formattedScale}`,
        neighborhood: data.neighborhood.neighborhoodName,
        amenities: amenities,
        optionalExtras: smallPrint.optionalExtras,
        arrivingLeaving: atAGlance.keyFacts.arrivingLeaving,
      };
    } catch (err) {
      console.error(err);
      throw Error('Failed to load hotels description');
    }
  }

  async getTourImage(id: string): Promise<string> {
    const params = {
      id,
    };

    try {
      const response = await this.getResponse('properties/get-hotel-photos', params);
      const data = await response.data;
      return data.hotelImages[0].baseUrl.replace('{size}', 'z');
    } catch (err) {
      console.error(err);
      throw Error('Failed to load hotel images');
    }
  }

  async getTourDetails(id: string | undefined): Promise<TourDetailsType> {
    if (!id) {
      return {} as TourDetailsType;
    }

    try {
      const description = await this.getTourDescription(id);
      const img = await this.getTourImage(id);

      return { ...description, img };
    } catch (error) {
      throw error;
    }
  }

  async getBriefToursInfo(
    city: string,
    filters: FilterData,
    page: number
  ): Promise<{ data: Array<TourData>; total: number }> {
    try {
      const locationId = await this.getLocationId(city);
      const { hotelsData, totalPages } = await this.getHotels(locationId, filters, page);

      const briefHotelsData = hotelsData.map((hotel) => ({
        id: hotel.id.toString(),
        accommodation: hotel.name || 'No name',
        rating: hotel?.starRating,
        city: hotel?.address?.locality || 'no city data',
        country: hotel?.address?.countryName || 'no country data',
        img: hotel.optimizedThumbUrls?.srpDesktop || defaultImg,
        price: hotel?.ratePlan?.price?.exactCurrent,
        landmarks: hotel?.landmarks?.length
          ? `${hotel.landmarks[0].distance} from ${hotel.landmarks[0].label}`
          : undefined,
      }));
      return { data: briefHotelsData, total: totalPages };
    } catch (error) {
      throw error;
    }
  }
}
