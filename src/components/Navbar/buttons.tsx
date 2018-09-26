import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import { convertStringToCamelCase } from '../../utilities/formatters';

interface ButtonListProp {
  id: number;
  role: string;
  icon: string;
}

interface ButtonListProps {
  navbarButtons: ButtonListProp[];
}

export const buttonDefinition: ButtonListProp[] = [
  { id: 0, role: 'Transmission', icon: 'inboxIcon' },
  { id: 1, role: 'Transfer Box', icon: 'two' },
  { id: 2, role: 'Propshafts', icon: 'three' },
  { id: 3, role: 'Rear Drive Unit', icon: 'four' },
  { id: 4, role: 'Front Drive Unit', icon: 'five' }
];

interface NavbarIcons{
  icon: string;
}

const NavbarIcon = (props: NavbarIcons) => {
  const icon = props.icon;
  switch(icon) {
    case('inboxIcon'): 
      return (
        <ListItemIcon>
          <InboxIcon />
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


function handleClick() {
  console.log('handling click');
}

export function ButtonList(props: ButtonListProps) {
  const navbarButtons = props.navbarButtons;
  const listNavbarButtons = navbarButtons.map(button => 
    <ListItem 
      button 
      key={button.id}
      // hack to extend ListItem props
      {...{ link: convertStringToCamelCase(button.role), burger: "sauce"  } as any}
      onClick={() => handleClick()}>
      <NavbarIcon 
        icon={button.icon}
      />
      <ListItemText primary={button.role} />
    </ListItem>
  )
  return (
    <List>{listNavbarButtons}</List>
  )
}