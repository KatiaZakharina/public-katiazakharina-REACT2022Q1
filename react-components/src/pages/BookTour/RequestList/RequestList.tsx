import { Description } from '../Description/Description';
import { TourFormData } from '../Form/FormFields';
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
