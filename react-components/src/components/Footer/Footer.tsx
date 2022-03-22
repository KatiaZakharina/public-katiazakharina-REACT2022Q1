import { DevInfo, RSLogo, StyledFooter } from './StyledFooter';
import { Container } from '../Layout/Container';

import rsschool from '../../assets/svg/rs_school_js.svg';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <RSLogo src={rsschool} />
        </a>
        <DevInfo>
          <a href="https://github.com/KatiaZakharina" target="_blank" rel="noreferrer">
            Katia Zakharina
          </a>
          <span>2022</span>
        </DevInfo>
      </Container>
    </StyledFooter>
  );
}
