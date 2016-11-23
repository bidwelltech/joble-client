import React from 'react';
import AppBar from 'material-ui/AppBar';
import AccountMenu from '../AccountMenu';
import './Main.css';

// iconElementRight={this.state.logged ? <Logged /> : <Login />}
const Main = ({ children }) => (
  <div className="Main">
    <AppBar
      title="Joble"
      showMenuIconButton={false}
      iconElementRight={<AccountMenu />}
    />
    { children }
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
