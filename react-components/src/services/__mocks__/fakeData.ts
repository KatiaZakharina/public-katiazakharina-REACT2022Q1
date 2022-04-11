export const locationSearchAPIData = {
  suggestions: [
    {
      entities: [
        {
          destinationId: '504261',
        },
      ],
    },
  ],
};

export const hotels = [
  {
    id: 455577,
    name: 'Motel 6 Galveston, TX',
    starRating: 2,
    address: {
      locality: 'Galveston',
      countryName: 'United States',
    },
    landmarks: [
      {
        label: 'City center',
        distance: '4.0 miles',
      },
    ],
    ratePlan: {
      price: {
        exactCurrent: 57.56,
      },
    },
    neighbourhood: 'Galveston',
    optimizedThumbUrls: {
      srpDesktop:
        'https://exp.cdn-hotels.com/hotels/1000000/1000000/996400/996345/e1993493_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    },
  },
  {
    id: 118521,
    name: 'Beachcomber Inn',
    starRating: 2,
    address: {
      locality: 'Galveston',
      countryName: 'United States',
    },
    landmarks: [
      {
        label: 'City center',
        distance: '3.3 miles',
      },
    ],
    ratePlan: {
      price: {
        exactCurrent: 79.25,
      },
    },
    neighbourhood: 'Galveston',
    optimizedThumbUrls: {
      srpDesktop:
        'https://exp.cdn-hotels.com/hotels/1000000/10000/7700/7682/6ad0ca47_z.jpg?impolicy=fcrop&w=250&h=140&q=high',
    },
  },
];

export const hotelsAPIData = {
  data: {
    body: {
      searchResults: {
        results: hotels,
      },
    },
  },
};

export const hotelDetailsAPIData = {
  result: 'OK',
  data: {
    body: {
      propertyDescription: {
        address: {
          fullAddress: '808 61st St, Galveston, TX, 77551, United States of America',
        },
        name: 'Candlewood Suites Galveston, an IHG Hotel',
        starRating: 2.5,
        featuredPrice: {
          currentPrice: {
            formatted: '$89',
          },
        },
        tagline: ['<b>Hotel with outdoor pool, near Moody Gardens </b>'],
      },
      guestReviews: {
        brands: {
          formattedScale: '10',
          formattedRating: '7.2',
        },
      },
      atAGlance: {
        keyFacts: {
          arrivingLeaving: ['Check-in time 3 PM-10:00 PM', 'Check-out time is  11 AM'],
        },
      },
      amenities: [
        {
          heading: 'In the hotel',
          listItems: [
            {
              heading: 'Food and drink',
              listItems: ['Coffee/tea in a common area', 'Barbecue grills'],
            },
            {
              heading: 'Languages Spoken',
              listItems: ['English', 'Hindi', 'Spanish', 'Urdu'],
            },
          ],
        },
        {
          heading: 'In the room',
          listItems: [
            {
              heading: 'Home comforts',
              listItems: ['Air conditioning', 'Coffee/tea maker', 'Iron/ironing board'],
            },
          ],
        },
      ],
      smallPrint: {
        optionalExtras: [
          '<p><strong>Pets</strong> are allowed for an extra charge of USD 75 per pet, per night</p>Service animals exempt from fees',
        ],
      },
    },
  },
  neighborhood: {
    neighborhoodName: 'Tiki Island',
  },
};

export const hotelImg =
  'https://exp.cdn-hotels.com/hotels/2000000/1990000/1988100/1988040/a32e4d89_{size}.jpg';

export const hotelImgAPIData = {
  hotelImages: [
    {
      baseUrl: hotelImg,
    },
  ],
};
