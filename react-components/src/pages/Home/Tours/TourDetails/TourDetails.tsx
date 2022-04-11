import { ErrorSection } from 'components/helpers/ErrorSection/ErrorSection';
import { IconList } from 'components/IconList/IconList';
import { TourDetailsType } from 'services/ToursDataType';
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
          {data.amenities.map((amenity, idx) => (
            <div key={idx}>
              <AHeading>{amenity.heading}</AHeading>
              <AListItems>
                {amenity.listItems.map(({ heading, listItems }, idx) => (
                  <div key={idx}>
                    <AHeading>{heading}</AHeading>
                    <AListItems>
                      {listItems.map((item, idx) => (
                        <AListItem key={idx}>{item}</AListItem>
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
        {data.optionalExtras.map((extra, idx) => (
          <OptionalExtra key={idx} dangerouslySetInnerHTML={{ __html: extra }} />
        ))}
      </OptionalExtras>
    </StyledTourDetails>
  ) : (
    <ErrorSection message="No info about this tour" />
  );
};
