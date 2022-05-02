import { Navigate } from 'react-router-dom';

import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import { IconList } from 'components/IconList/IconList';
import { TourDetailsType } from 'services/types';
import {
  Address,
  Amenities,
  AHeading,
  AListItem,
  AListItems,
  HeadingInfo,
  OptionalExtra,
  OptionalExtras,
  Overview,
  Section,
  SectionTitle,
  StyledTourDetails,
  TagLine,
  TourHeading,
  TourImg,
  TourName,
} from './StyledTourDetails';

type TourDescriptionProps = { data: TourDetailsType | null };

export const TourDetails = ({ data }: TourDescriptionProps) => {
  return data ? (
    <StyledTourDetails data-testid="tour_details">
      <Breadcrumbs
        location={[
          { name: 'Tours', link: '/' },
          { name: data?.name, link: '#' },
        ]}
      />
      <Section>
        <TourHeading>
          <TourName>{data.name}</TourName>
          <TagLine dangerouslySetInnerHTML={{ __html: data.tagline[0] }} />
        </TourHeading>
        <Address>{data.address}</Address>

        <HeadingInfo>
          <TourImg src={data.img} />
          <Overview>
            <IconList
              data={{
                rating: data.rating,
                price: data.price,
                guestReview: data.guestReviews,
                neighborhood: data.neighborhood,
                arriving: data.arrivingLeaving[0],
                leaving: data.arrivingLeaving[1],
              }}
              dataDecoration={[
                { name: 'rating', icon: 'star.svg', text: 'stars' },
                { name: 'price', icon: 'money-bill.svg' },
                { name: 'guestReview', icon: 'star.svg' },
                { name: 'neighborhood', icon: 'location.svg', text: 'neighborhood' },
                { name: 'arriving', icon: 'calendar.svg' },
                { name: 'leaving', icon: 'calendar.svg' },
              ]}
            />
          </Overview>
        </HeadingInfo>
      </Section>
      <Section>
        <SectionTitle>Amenities</SectionTitle>
        <Amenities>
          {data.amenities.map((amenity, index) => (
            <div key={index}>
              <AHeading>{amenity.heading}</AHeading>
              <AListItems>
                {amenity.listItems.map(({ heading, listItems }, index) => (
                  <div key={index}>
                    <AHeading>{heading}</AHeading>
                    <AListItems>
                      {listItems.map((item, index) => (
                        <AListItem key={index}>{item}</AListItem>
                      ))}
                    </AListItems>
                  </div>
                ))}
              </AListItems>
            </div>
          ))}
        </Amenities>
      </Section>
      <OptionalExtras>
        {data.optionalExtras.map((extra, index) => (
          <OptionalExtra key={index} dangerouslySetInnerHTML={{ __html: extra }} />
        ))}
      </OptionalExtras>
    </StyledTourDetails>
  ) : (
    <Navigate to="/" />
  );
};
