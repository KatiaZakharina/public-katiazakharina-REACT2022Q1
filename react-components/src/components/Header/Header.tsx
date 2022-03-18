import { StyledHeader, NavLinkLogo, Nav, StyledNavLink } from './StyledHeader';
import { Container } from '../Layout/Container';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <NavLinkLogo to="/" img={logo} width={265} height={40}></NavLinkLogo>
        <Nav>
          <StyledNavLink to="/about">About us</StyledNavLink>
          <StyledNavLink to="/404">404</StyledNavLink>
          <StyledNavLink to="/wrongpath">Wrong path</StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
