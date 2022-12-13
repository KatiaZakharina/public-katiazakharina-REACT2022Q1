import styled, { keyframes } from 'styled-components';

import { BLACK, GRAY, LIGHT_GRAY, ORANGE } from 'styles/constants';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
}`;

export const Spinner = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: conic-gradient(${GRAY}, ${ORANGE});
  animation: ${spin} 1.4s linear infinite;
  transform: translateZ(0);

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: ${LIGHT_GRAY};
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: ${BLACK};

  ${Spinner} {
    margin-right: 20px;
  }
`;

export const SpinnerLoading = () => (
  <SpinnerWrapper data-testid="preloader">
    <Spinner />
    Loading...
  </SpinnerWrapper>
);
