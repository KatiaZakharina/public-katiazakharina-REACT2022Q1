import {
  ErrorCode,
  ErrorDescription,
  ErrorImg,
  Message,
  StyledErrorSection,
  Title,
} from './StyledErrorSection';

import error from 'assets/error_svg/error.svg';
import emptySearch from 'assets/error_svg/empty_search.svg';
import noConnection from 'assets/error_svg/no_connection.svg';
import { CustomErrorCode } from 'services/types';

type ErrorSectionProps = { code?: number | CustomErrorCode; title?: string; message?: string };

export function ErrorSection({ code, title, message }: ErrorSectionProps) {
  let img;

  switch (code) {
    case 500:
      title = title ?? 'Internal Server Error';
      message = message ?? 'Sorry, there were some technical issues while processing yous request';
      img = noConnection;
      break;

    case 'empty_search':
      title = title ?? 'Result Not Found';
      message = message ?? 'Please try again with another keywords or maybe use generic term';
      img = emptySearch;
      break;

    default:
      title = title ?? 'Oops!';
      message = message ?? 'Sorry, something has gone wrong. Please try refreshing this page';
      img = error;
  }

  return (
    <StyledErrorSection>
      <ErrorImg src={img} />
      <ErrorDescription>
        <Title>{title}</Title>
        <Message>{message}</Message>
        {typeof code === 'number' && <ErrorCode>ERROR CODE: {code}</ErrorCode>}
      </ErrorDescription>
    </StyledErrorSection>
  );
}
