import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import { convertStringToCamelCase, convertStringToHyphenated } from '../../utilities/formatters';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaWrench } from 'react-icons/fa';
import { ButtonListProp } from '../../config';

export interface ButtonListProps {
  navbarButtons: ButtonListProp[];
  currentPage: any;
}

interface NavbarIcons {
  icon: string;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const NavbarIcon = (props: NavbarIcons) => {
  const icon = props.icon;
  switch(icon) {
    case('hardware-sub-system'): 
      return (
        <ListItemIcon>
          <FaWrench />
        </ListItemIcon>
      )
      break
    case('two'):
      return (
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      )
      break
    default: 
      return null
  }
}

export const ButtonList = (props: ButtonListProps, match: any) => {
  const { navbarButtons } = props;
  const listNavbarButtons = navbarButtons.map(button => 
      <StyledNavLink 
        to={'/dfmea/' + convertStringToHyphenated(button.role)}
        key={button.id}
      >
        <ListItem 
          button>
          <NavbarIcon 
            icon={button.icon}
          />
          <ListItemText primary={button.role} />
        </ListItem>
      </StyledNavLink>
  )
  return (
    <List>{listNavbarButtons}</List>
  )
}
