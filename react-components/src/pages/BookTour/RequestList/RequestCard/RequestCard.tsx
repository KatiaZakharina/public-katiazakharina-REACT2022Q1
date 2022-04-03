import { TourFormData } from 'pages/BookTour/Form/Form';
import { IconList } from 'components/IconList/IconList';
import { RequestFullName, StyledRequestCard } from './StyledRequestCard';
import { LabelsWrapper } from '../StyledRequestList';
import { ButtonBadge } from 'components/Badges/ButtonBadge';
import { LabelBadge } from 'components/Badges/LabelBadge';

type RequestCardProps = { data: TourFormData };

const requestInfoData: Array<{ name: keyof InfoProps; icon: string; text?: string }> = [
  { name: 'email', icon: 'mail.svg' },
  { name: 'date', icon: 'calendar.svg' },
  { name: 'destination', icon: 'location.svg' },
  { name: 'pcr', icon: 'virus.svg' },
];

type InfoProps = Partial<TourFormData>;

export function RequestCard(props: RequestCardProps) {
  const { firstName, lastName, email, date, destination, withChildren, getNotification } =
    props.data;

  return (
    <StyledRequestCard data-testid="request_card">
      <RequestFullName>
        {firstName} {lastName}
      </RequestFullName>
      <IconList
        data={{ email, date, destination, pcr: 'pcr is negative' }}
        dataDecoration={requestInfoData}
      />
      <LabelsWrapper>
        {!withChildren || <ButtonBadge>with children</ButtonBadge>}
        {!getNotification || <LabelBadge>notifications ✔</LabelBadge>}
      </LabelsWrapper>
    </StyledRequestCard>
  );
}
