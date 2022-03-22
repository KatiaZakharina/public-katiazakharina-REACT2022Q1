import styled from 'styled-components';

import { BLACK } from '../../../../styles/colorConstats';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  color: ${BLACK};
  background-color: #fff;
  border-radius: 2rem 0;
  box-shadow: 0px 4px 30px rgb(0 0 0 / 15%);

  @media (max-width: 1024px) {
    min-width: 200px;
  }

  @media (min-width: 1440px) {
    min-width: 340px;
  }
`;

type CardImgProps = { img: string; name: string };

export const CardImg = styled.img.attrs((props: CardImgProps) => ({
  alt: props.name,
  src: props.img,
}))<CardImgProps>`
  height: 15rem;
  max-height: 250px;
  object-fit: cover;
  border-top-left-radius: 2rem;
`;

export const CardDescription = styled.div`
  position: relative;
`;

export const CardTitle = styled.h3`
  margin: 15px 10px;
  max-width: 60%;
`;
