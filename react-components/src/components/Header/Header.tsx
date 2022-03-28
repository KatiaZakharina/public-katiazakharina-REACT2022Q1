import { StyledHeader, NavLinkLogo, Nav, StyledNavLink } from './StyledHeader';
import { Container } from 'components/Layout/Container';

import logo from 'assets/svg/logo.svg';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <NavLinkLogo to="/" img={logo}></NavLinkLogo>
        <Nav>
          <StyledNavLink to="/about">About us</StyledNavLink>
          <StyledNavLink to="/404">404</StyledNavLink>
          <StyledNavLink to="/wrongpath">Wrong path</StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
