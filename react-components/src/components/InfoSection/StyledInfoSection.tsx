import styled from 'styled-components';
import { BLACK } from '../../styles/colorConstats';

export const StyledInfoSection = styled.div<{ side: 'left' | 'right' }>`
  display: flex;
  color: ${BLACK};
  flex-direction: ${(props) => (props.side === 'left' ? 'row' : 'row-reverse')};
  gap: 25px;
  font-weight: 300;
  font-size: 1.1rem;
  margin: 2rem 0;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img {
    width: 30vw;
    height: 30vw;
    max-width: 700px;
    max-height: 500px;
    min-height: 50px;
    object-fit: cover;
  }
`;
