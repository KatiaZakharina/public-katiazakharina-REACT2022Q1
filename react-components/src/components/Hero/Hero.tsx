import { Container } from 'components/Layout/Container';
import { BgWrapper, LeftTitle } from './StyledHero';

type HeroProps = { bg: string; text: string };

export function Hero(props: HeroProps) {
  const { bg, text } = props;

  return (
    <BgWrapper bg={bg} data-testid="hero_section">
      <Container>
        <LeftTitle>{text}</LeftTitle>
      </Container>
    </BgWrapper>
  );
}
