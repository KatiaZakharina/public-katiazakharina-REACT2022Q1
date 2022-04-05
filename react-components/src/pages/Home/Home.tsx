import { Hero } from 'components/Hero/Hero';
import { Main } from 'components/Layout/Main';
import { CardSection } from './Tours/CardSection/CardSection';

import toursData from 'db/tours_data.json';
import bg from 'assets/bg_img/back.jpg';

export function Home() {
  return (
    <Main>
      <Hero bg={bg} text="Get Your Dream Vacation" />
      <CardSection data={toursData} />
    </Main>
  );
}
