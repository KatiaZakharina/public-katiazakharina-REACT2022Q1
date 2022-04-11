import { Hero } from 'components/Hero/Hero';
import { Main } from 'components/Layout/Main';
import { Tours } from './Tours/Tours';

import bg from 'assets/bg_img/back.jpg';

export function Home() {
  return (
    <Main data-testid="home_page">
      <Hero bg={bg} text="Get Your Dream Vacation" />
      <Tours />
    </Main>
  );
}
