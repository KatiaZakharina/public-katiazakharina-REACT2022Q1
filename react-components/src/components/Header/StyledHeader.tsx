import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { px2vw } from '../../utils/px2vw';
import { SEA_BLUE } from '../../styles/colorConstats';

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
  width: calc(40vw);
  max-width: 700px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  opacity: 0.8;
  transition: opacity linear 0.2s;

  &.active {
    border-bottom: 1px solid #fff;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

type NavLogoProps = { img: string; width: number; height: number };
type NavLinkLogoProps = { to: string } & NavLogoProps;

export const NavLinkLogo = (props: NavLinkLogoProps) => (
  <NavLink to={props.to}>
    <NavLogo img={props.img} width={props.width} height={props.height}></NavLogo>
  </NavLink>
);

const NavLogo = styled.img.attrs((props: NavLogoProps) => ({
  src: props.img,
  alt: 'logo image',
}))<NavLogoProps>`
  width: ${(props) => px2vw(props.width)};
  height: ${(props) => px2vw(props.height)};
  min-width: ${(props) => props.width / 2}px;
  min-height: ${(props) => props.height / 2}px;
  object-fit: cover;
`;
