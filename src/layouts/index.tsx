import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { styles } from '../components/Navbar/styles';
import { buttonDefinition } from '../config';
import { ButtonList } from '../components/Navbar/buttons';
import { History } from 'history';
import MainContent from '../containers/Dfmea/MainContent';
import TodosApp from '../components/Todos';

interface Props extends WithStyles<typeof styles> {}

type PathParamsType = {
  system: string,
}

type MainContentProps = RouteComponentProps<PathParamsType> & {
  classes: any;
  containerClass: string;
  toolbarClass: string;
  history: History;
}

class DfmeaLayout extends React.Component<MainContentProps> {

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="absolute" className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar} />
          <ButtonList 
            navbarButtons={buttonDefinition}
            currentPage={this.props.match}
          />
          <Divider />
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar}></div>
          <MainContent 
            system={this.props.match.params.system}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(DfmeaLayout));