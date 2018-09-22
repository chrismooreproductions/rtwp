import * as React from 'react';
import { NavbarWrapper, StyledLink } from './styles';

const NavBar = () => (
  <NavbarWrapper>
    <StyledLink 
        to="/another-page">
        Other Page
    </StyledLink>
    <StyledLink
        to="/app">
        App
    </StyledLink>
  </NavbarWrapper>
)

export default NavBar