import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SEA_BLUE, WHITE } from 'styles/colorConstats';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 0;
  height: 10vh;
  background-color: ${SEA_BLUE};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  width: 40vw;
  max-width: 700px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${WHITE};
  opacity: 0.8;
  transition: opacity linear 0.2s;

  &.active {
    border-bottom: 1px solid ${WHITE};
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

type NavLogoProps = { img: string };
type NavLinkLogoProps = { to: string } & NavLogoProps;

export const NavLinkLogo = (props: NavLinkLogoProps) => (
  <NavLink to={props.to}>
    <NavLogo img={props.img}></NavLogo>
  </NavLink>
);

const NavLogo = styled.img.attrs((props: NavLogoProps) => ({
  src: props.img,
  alt: 'logo image',
}))<NavLogoProps>`
  width: 13rem;
  height: 2rem;
  object-fit: cover;
`;
