import { DefaultRequestBody, RequestHandler, rest } from 'msw';

import { TourService } from 'services/TourService';
import {
  locationSearchAPIData,
  hotelDetailsAPIData,
  hotelImgAPIData,
  hotelsAPIData,
} from './fakeData';

type Handlers =
  | 'locationIdResponse'
  | 'hotelsResponse'
  | 'hotelDetailsResponse'
  | 'hotelImageResponse';

type HandlersFactorySetup = { handler: Handlers; status: number }[];
type HandlersListType = { [key in Handlers]: { path: string; correctData: unknown } };

export class HandlersFactory {
  public handlers: RequestHandler[];

  handlersList: HandlersListType = {
    locationIdResponse: { path: '/locations/v2/search', correctData: locationSearchAPIData },
    hotelsResponse: { path: '/properties/list', correctData: hotelsAPIData },
    hotelDetailsResponse: { path: '/properties/get-details', correctData: hotelDetailsAPIData },
    hotelImageResponse: { path: '/properties/get-hotel-photos', correctData: hotelImgAPIData },
  };

  basePath = `https://${process.env.REACT_APP_RAPID_API_HOST}`;

  constructor(setup: HandlersFactorySetup) {
    this.handlers = this.setHandlers(setup);
  }

  setHandlers(setup: HandlersFactorySetup): RequestHandler[] {
    const handlers: RequestHandler[] = [];

    setup.forEach((handlerSetup) => {
      const handlerInfo = this.handlersList[handlerSetup.handler];
      const response = handlerSetup.status === 200 ? handlerInfo.correctData : null;

      handlers.push(
        rest.get(`${this.basePath}${handlerInfo.path}`, (req, res, ctx) => {
          return res(ctx.status(handlerSetup.status), ctx.json(response as DefaultRequestBody));
        })
      );
    });

    return handlers;
  }
}
