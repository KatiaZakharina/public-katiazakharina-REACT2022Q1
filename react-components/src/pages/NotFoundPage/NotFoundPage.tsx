import { Hero } from '../../components/Hero/Hero';

import bg from '../../assets/bg_img/404.jpg';

export function NotFoundPage() {
  return <Hero bg={bg} text={'Sorry, Page Not Found'} />;
}
