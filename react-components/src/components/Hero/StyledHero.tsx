import styled from 'styled-components';
import { SEA_BLUE } from '../../styles/colorConstats';

export const BgWrapper = styled.div<{ bg: string }>`
  height: calc(90vh);
  max-height: 1600px;
  background-image: url(${(props) => props.bg});
  background-color: ${SEA_BLUE};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const LeftTitle = styled.h2`
  margin-top: 20vh;
  max-width: 50vw;
  font-size: 5.5rem;
  font-weight: 700;
`;
