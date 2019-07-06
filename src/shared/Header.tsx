import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../assets/icons8-wheel-48.png';
import logo from '../assets/logo.svg';
import Routes from './Routes';

const Header = styled.header`
  text-align: center;

  img {
    margin: 1rem 0;
    height: 7rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
      content: '';
      background: url(${icon}) no-repeat;
      background-size: 1rem;
      height: 1rem;
      width: 1rem;
      margin: 0 1rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: gray;
  }

  &.active {
    text-decoration: underline;
  }
`;

export default () => (
  <Header>
    <img src={logo} alt="Redbridge Motors logo" />
    <Nav>
      <ul>
        <li>
          <StyledNavLink exact to={Routes.home}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={Routes.about}>About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={Routes.findMyCar}>Car Finder</StyledNavLink>
        </li>
      </ul>
    </Nav>
  </Header>
);
