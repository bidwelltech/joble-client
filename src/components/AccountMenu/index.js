import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import './AccountMenu.css';

const AccountMenu = props => (
  <div className="AccountMenu">
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem>
        <Link to="/account">Account</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/account/register">Register</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/account/login">Login</Link>
      </MenuItem>
    </IconMenu>
  </div>
);

export default AccountMenu;
