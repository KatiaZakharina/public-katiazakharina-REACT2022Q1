import { Hero } from 'components/Hero/Hero';
import { InfoSection } from './InfoSection/InfoSection';
import { ColumnContainer } from 'components/Layout/Container';
import { Main } from 'components/Layout/Main';

import about from 'assets/bg_img/about.jpg';
import about1 from 'assets/bg_img/about1.webp';
import about2 from 'assets/bg_img/about2.webp';
import { Side } from './InfoSection/SideEnum';

export function AboutUs() {
  return (
    <Main data-testid="about_page">
      <Hero bg={about} text={'The relentless pursuit of excellence'} />
      <ColumnContainer>
        <InfoSection side={Side['right']} img={about1}>
          <h2>A transformative adventure</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus
            venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent
            elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam.
          </p>
          <p>
            Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci
            sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
            augue lacus
          </p>
        </InfoSection>
        <InfoSection side={Side['left']} img={about2}>
          <h2>Somewhere, something, someone — new</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus
            venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent
            elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam.
          </p>
          <p>
            Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci
            sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
            augue lacus
          </p>
        </InfoSection>
      </ColumnContainer>
    </Main>
  );
}
