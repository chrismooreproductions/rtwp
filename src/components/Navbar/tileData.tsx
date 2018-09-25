// This file is shared across the demos.

import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import Icon from '@material-ui/core/Icon';
import theme from '../../routes';

interface Props {
  classes: any;
}

const styles = (theme: Theme) => createStyles ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
});

interface Props extends WithStyles<typeof styles> {}

function MailFolderListItems(props: Props) {
  const { classes } = props;

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          <Icon className={classes.icon} color="primary">
            add_circle
          </Icon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  )
};

export default withStyles(styles)(MailFolderListItems);

// function OtherMailFolderListItems(props: Props) {
//   const { classes } = props;
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <MailIcon />
//       </ListItemIcon>
//       <ListItemText primary="All mail" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <DeleteIcon />
//       </ListItemIcon>
//       <ListItemText primary="Trash" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem>
//   </div>
// };


// export { MailFolderListItems, OtherMailFolderListItems };