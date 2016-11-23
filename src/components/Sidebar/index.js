import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import './Sidebar.css';

// TODO: Drawer should be open > 990px and closed < 990px.
const Sidebar = () => (
  <div className="Sidebar">
    <Drawer open>
      <MenuItem>
        <Link to="/account">Account</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/account/register">Register</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/account/login">Login</Link>
      </MenuItem>
    </Drawer>
  </div>
);

export default Sidebar;
