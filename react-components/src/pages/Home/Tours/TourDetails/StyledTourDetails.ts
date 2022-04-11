import styled from 'styled-components';

import { IconRow } from 'components/IconList/StyledIconList';
import { BLUE, DARK_GRAY, ORANGE, WHITE } from 'styles/constants';

export const StyledTourDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 2rem;
  color: ${ORANGE};
  text-align: center;
`;

export const TourHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingInfo = styled.div`
  display: flex;
`;

export const TourName = styled.h1`
  padding-right: 15px;
`;

export const TagLine = styled.span`
  padding: 5px 10px;
  color: ${WHITE};
  background-color: ${ORANGE};
`;

export const Address = styled.p`
  margin-bottom: 10px;
  color: ${DARK_GRAY};
`;

export const TourImg = styled.img`
  width: 30vw;
  height: 30vw;
  max-width: 700px;
  max-height: 500px;
  min-height: 50px;
  object-fit: cover;
`;

export const Overview = styled.div`
  padding: 10px;
  width: 50%;
  color: ${WHITE};
  background-color: ${BLUE};

  ${IconRow} {
    margin-bottom: 10px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
`;

export const OptionalExtras = styled(Section)`
  margin-bottom: 10px;
`;

export const OptionalExtra = styled.p`
  margin-bottom: 10px;
  padding: 10px;
  color: ${WHITE};
  background-color: ${ORANGE};
`;

export const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  font-size: 1.5rem;
`;

export const AHeading = styled.h3`
  margin-bottom: 5px;
  font-size: 1em;
`;

export const AListItems = styled.ul`
  margin-bottom: 1.5em;
  font-size: 0.7em;
`;

export const AListItem = styled.li`
  margin-left: 10px;
`;
