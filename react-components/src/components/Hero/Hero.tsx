import { Container } from 'components/Layout/Container';
import { BgWrapper, LeftTitle } from './StyledHero';

type HeroProps = { bg: string; text: string };

export function Hero(props: HeroProps) {
  return (
    <BgWrapper bg={props.bg} data-testid="hero_section">
      <Container>
        <LeftTitle>{props.text}</LeftTitle>
      </Container>
    </BgWrapper>
  );
}
