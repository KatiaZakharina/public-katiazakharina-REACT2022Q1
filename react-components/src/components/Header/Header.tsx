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
          <StyledNavLink to="/book-tour">Book tour</StyledNavLink>
          <StyledNavLink to="/404">404</StyledNavLink>
          <StyledNavLink to="/wrong-path">Wrong path</StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
