import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton, Crumb, StyledBreadcrumbs } from './StyledBreadcrumbs';

type Props = { location: { name?: string; link: string }[] };

export const Breadcrumbs = ({ location }: Props) => {
  const navigate = useNavigate();

  const MAX_CRUMB_LENGTH = 25;

  return (
    <StyledBreadcrumbs>
      <BackButton onClick={() => navigate(-1)}>{'← Back'}</BackButton>
      {location.map(
        (crumb, index) =>
          crumb.name && (
            <Fragment key={index}>
              <Crumb to={crumb.link}>
                {crumb.name.length > MAX_CRUMB_LENGTH
                  ? `${crumb.name.slice(0, MAX_CRUMB_LENGTH)}...`
                  : crumb.name}
              </Crumb>
              {' / '}
            </Fragment>
          )
      )}
    </StyledBreadcrumbs>
  );
};
