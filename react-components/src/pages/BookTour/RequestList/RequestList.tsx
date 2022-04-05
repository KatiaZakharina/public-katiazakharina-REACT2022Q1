import { TourFormData } from '../Form/Form';
import { RequestCard } from './RequestCard/RequestCard';
import { DefaultMessage, RequestsTitle, StyledRequestList } from './StyledRequestList';

type RequestListProps = { requests: Array<TourFormData> };

export function RequestList(props: RequestListProps) {
  return (
    <StyledRequestList>
      <RequestsTitle>Requests List</RequestsTitle>

      {!!props.requests.length ? (
        props.requests.map((data, idx) => <RequestCard key={idx} data={data} />)
      ) : (
        <DefaultMessage>The list is empty</DefaultMessage>
      )}
    </StyledRequestList>
  );
}
