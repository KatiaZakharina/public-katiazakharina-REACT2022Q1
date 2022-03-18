import { Hero } from '../../components/Hero/Hero';

import bg from '../../assets/bg_img/back.jpg';
import { Main } from '../../components/Layout/Main';

export function Home() {
  return (
    <Main>
      <Hero bg={bg} text="Get Your Dream Vacation" />
    </Main>
  );
}
