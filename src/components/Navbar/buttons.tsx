import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import { convertStringToCamelCase } from '../../utilities/formatters';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaWrench } from 'react-icons/fa';

interface ButtonListProp {
  id: number;
  role: string;
  icon: string;
}

interface ButtonListProps {
  navbarButtons: ButtonListProp[];
}

interface NavbarIcons {
  icon: string;
}

export const buttonDefinition: ButtonListProp[] = [
  { id: 0, role: 'Transmission', icon: 'hardware-sub-system' },
  { id: 1, role: 'Transfer Box', icon: 'hardware-sub-system' },
  { id: 2, role: 'Propshafts', icon: 'hardware-sub-system' },
  { id: 3, role: 'Rear Drive Unit', icon: 'hardware-sub-system' },
  { id: 4, role: 'Front Drive Unit', icon: 'hardware-sub-system' }
];

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const handleClick = (tabLink: string) => {
  console.log(tabLink);
}

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

export const ButtonList = (props: ButtonListProps) => {
  const navbarButtons = props.navbarButtons;
  const listNavbarButtons = navbarButtons.map(button => 
    <ListItem 
      button 
      key={button.id}
      // hack to extend ListItem props
      { ...{ link: convertStringToCamelCase(button.role) } as any}
      onClick={() => handleClick(convertStringToCamelCase(button.role))}>
      <StyledNavLink 
        to="/app"
      >
        <NavbarIcon 
          icon={button.icon}
        />
        <ListItemText primary={button.role} />
      </StyledNavLink>
    </ListItem>
  )
  return (
    <List>{listNavbarButtons}</List>
  )
}