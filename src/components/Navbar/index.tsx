import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems } from './tileData';
import { styles } from './styles';
import { buttonDefinition, ButtonList } from './buttons';

interface Props extends WithStyles<typeof styles> {}

const Navbar = (props: Props) => {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <ButtonList 
          navbarButtons={buttonDefinition} 
        />
        <Divider />
        {/* <List>{OtherMailFolderListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
      </main>
    </div>
  );
}

export default withStyles(styles)(Navbar);