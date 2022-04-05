import { Description } from '../Description/Description';
import { TourFormData } from '../Form/Form';
import { RequestCard } from './RequestCard/RequestCard';
import { RequestsTitle, StyledRequestList } from './StyledRequestList';

type RequestListProps = { requests: Array<TourFormData> };

export function RequestList(props: RequestListProps) {
  return (
    <StyledRequestList>
      <RequestsTitle>Requests List</RequestsTitle>

      {!!props.requests.length ? (
        props.requests.map((data, idx) => <RequestCard key={idx} data={data} />)
      ) : (
        <Description />
      )}
    </StyledRequestList>
  );
}
