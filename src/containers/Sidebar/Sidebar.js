import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Sidebar extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleGroupsClick = () => {
    this.setState(state => ({ 
      openGroups: !state.openGroups,
    }))
  }

  handleOfficeClick = () => {
    this.setState(state => ({ 
      openOffice: !state.openOffice,
      openTimeTracking: false,
      openMeetingRooms: false,
      openMyApps: false,
      openLaboratory: false,
    }))
  }

  handleTimeTrackingClick = () => {
    this.setState(state => ({ 
      openOffice: false,
      openTimeTracking: !state.openTimeTracking,
      openMeetingRooms: false,
      openMyApps: false,
      openLaboratory: false,
    }))
  }

  handleMeetingRoomsClick = () => {
    this.setState(state => ({ 
      openOffice: false,
      openTimeTracking: false,
      openMeetingRooms: !state.openMeetingRooms,
      openMyApps: false,
      openLaboratory: false,
    }))
  }

  handleMyAppsClick = () => {
    this.setState(state => ({ 
      openOffice: false,
      openTimeTracking: false,
      openMeetingRooms: false,
      openMyApps: !state.openMyApps,
      openLaboratory: false,
    }));
  }

  handleLaboratoryClick = () => {
    this.setState(state => ({ 
      openOffice: false,
      openTimeTracking: false,
      openMeetingRooms: false,
      openMyApps: false,
      openLaboratory: !state.openLaboratory,
    }))
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.props.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Avatar className={classes.orangeAvatar} style={{marginRight:'130px'}} onClick={this.handleGroupsClick}>CP</Avatar>
            <IconButton onClick={this.props.closed}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Collapse in={this.state.openGroups} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                  <Avatar className={classes.orangeAvatar}>CW</Avatar>
                  </ListItemIcon>
                <ListItemText inset primary="ConsenSys World" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                  <Avatar className={classes.orangeAvatar}>OD</Avatar>
                  </ListItemIcon>
                <ListItemText inset primary="Offsite Dublin" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          <List>
            <ListItem button key="Home">
              <ListItemIcon className={classes.menuIcon}><MailIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <Divider />
          {/* Office */}
          <List>
            <ListItem button onClick={this.handleOfficeClick}>
              <ListItemIcon className={classes.menuIcon}>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText inset primary="Office" />
              {this.state.openOffice ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openOffice} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Location" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="How To Connect" />
                </ListItem>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Contact" />
                </ListItem>
                
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Report a problem" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          {/* Meeting rooms */}
          <List>
            <ListItem button onClick={this.handleMeetingRoomsClick}>
              <ListItemIcon className={classes.menuIcon}>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText inset primary="Meeting Rooms" />
              {this.state.openMeetingRooms ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openMeetingRooms} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Express Booking" />
                </ListItem>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Book A Room" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          {/* Time tracking */}
          <List>
            <ListItem button onClick={this.handleTimeTrackingClick}>
              <ListItemIcon className={classes.menuIcon}>
                <InboxIcon />
              </ListItemIcon>
              
                <ListItemText inset>
                  Time Tracking
                  <Badge badgeContent={'!'} color="secondary" classes={{ badge: classes.badgeList }}></Badge>
                  </ListItemText>
              
            
              {this.state.openTimeTracking ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openTimeTracking} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Log Time" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Holidays" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Absence" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          {/* Vote */}
          <List>
            <ListItem button key="Vote">
              <ListItemIcon className={classes.menuIcon}><MailIcon /></ListItemIcon>
              <Badge badgeContent={2} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText primary="Vote" style={{marginLeft:'18px'}}>
                </ListItemText>
              </Badge>
            </ListItem>
          </List>
          <Divider />
          
          {/* My Apps */}
          <List>
            <ListItem button onClick={this.handleMyAppsClick}>
              <ListItemIcon className={classes.menuIcon}>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText inset primary="My Apps" />
              {this.state.openMyApps ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openMyApps} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Daily Scrum" />
                </ListItem>
                <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Find A Colleague" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          {/* Laboratory */}
          <List>
            <ListItem button onClick={this.handleLaboratoryClick}>
              <ListItemIcon className={classes.menuIcon}>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText inset primary="Laboratory" />
              {this.state.openLaboratory ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openLaboratory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Find Food" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.menuIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Photobooth" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          {/* Store */}
          <List>
            <ListItem button key="Apps">
              <ListItemIcon className={classes.menuIcon}><MailIcon /></ListItemIcon>
              <ListItemText primary="Apps" />
            </ListItem>
          </List>
          <Divider />
          {/* <div className={classes.toolsInfo}>
            Tools
          </div> */}
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction label="Help" icon={<RestoreIcon />} />
            <BottomNavigationAction label="About" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);