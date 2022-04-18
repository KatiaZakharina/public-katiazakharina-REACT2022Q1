import { useEffect } from 'react';

import { StyledInfoMessage } from './StyledInfoMessage';

type InfoMessageProps = { success: boolean; hideAlert: () => void };

export const InfoMessage = (props: InfoMessageProps) => {
  const { hideAlert, success } = props;

  const hidingTime = 3000;
  const successMessage = 'Data saved successfully';
  const errorMessage = 'Something went wrong';

  useEffect(() => {
    setTimeout(hideAlert, hidingTime);
  });

  return (
    <StyledInfoMessage success={success}>
      {success ? successMessage : errorMessage}
    </StyledInfoMessage>
  );
};
