import { Container } from 'components/Layout/Container';
import { BgWrapper, LeftTitle } from './StyledHero';

type HeroProps = { bg: string; text: string };

export function Hero(props: HeroProps) {
  return (
    <BgWrapper bg={props.bg}>
      <Container>
        <LeftTitle>{props.text}</LeftTitle>
      </Container>
    </BgWrapper>
  );
}
