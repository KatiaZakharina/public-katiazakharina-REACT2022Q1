import { TourFormData } from 'pages/BookTour/Form/Form';
import { StyledRequestCard } from './StyledRequestCard';

type RequestCardProps = { data: TourFormData };

export function RequestCard(props: RequestCardProps) {
  return (
    <StyledRequestCard>
      {Object.entries(props.data).map(([field, value], idx) => (
        <li key={idx}>{`${field} - ${value}`}</li>
      ))}
    </StyledRequestCard>
  );
}
