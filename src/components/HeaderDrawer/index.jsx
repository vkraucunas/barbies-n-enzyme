import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const barStyle = {
  backgroundColor: "#2d2d2d"
}


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class HeaderMenu extends Component {
  state = {
    logged: true,
    open: false
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  renderMenuItems = (linkInfo) => {
    return linkInfo.map((el, index) => (
    <MenuItem key={index} onClick={this.handleClose}>
      <Link to={el.to}>{el.text}</Link>
    </MenuItem>
    ))
  }

  render() {
    return (
      <div>
        <AppBar
          title="Fran's Barbie Dream Database"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          onLeftIconButtonTouchTap={this.handleToggle}
          style={barStyle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {
            this.renderMenuItems(this.props.linkInfo)
          }
        </Drawer>
      </div>
    );
  }
}

export default HeaderMenu;
