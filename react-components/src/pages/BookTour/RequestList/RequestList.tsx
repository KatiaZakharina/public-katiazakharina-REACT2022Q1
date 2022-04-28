import { TourFormData } from 'features/requests/types';
import { Description } from '../Description/Description';
import { RequestCard } from './RequestCard/RequestCard';
import { RequestsTitle, StyledRequestList } from './StyledRequestList';

type RequestListProps = { requests: Array<TourFormData> };

export function RequestList({ requests }: RequestListProps) {
  return (
    <StyledRequestList>
      <RequestsTitle>Requests List</RequestsTitle>

      {!!requests.length ? (
        requests.map((data, index) => <RequestCard key={index} data={data} />)
      ) : (
        <Description />
      )}
    </StyledRequestList>
  );
}
