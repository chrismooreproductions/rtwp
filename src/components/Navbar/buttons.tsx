import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';

interface ButtonListProp {
  id: number;
  role: string;
}

interface ButtonListProps {
  navbarButtons: ButtonListProp[];
}

export const buttonDefinition: ButtonListProp[] = [
  { id: 0, role: 'Transmission' },
  { id: 1, role: 'Transfer Box' },
  { id: 2, role: 'Propshafts' },
  { id: 3, role: 'Rear Drive Unit' },
  { id: 4, role: 'Front Drive Unit' }
];

export function ButtonList(props: ButtonListProps) {
  const navbarButtons = props.navbarButtons;
  const listNavbarButtons = navbarButtons.map( button => 
    <ListItem button key={button.id}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={button.role} />
    </ListItem>
  )
  return (
    <List>{listNavbarButtons}</List>
  )
}