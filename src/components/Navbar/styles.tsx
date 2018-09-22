import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: bold;

  &.active {
    color: palevioletred;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  padding: 15px;
  margin: 15px;
  justify-content: space-around;
  border: 2px solid lightblue;
`