import React from 'react';
import AppBar from 'material-ui/AppBar';
import './Main.css';

const Main = ({ children }) => (
  <div className="Main">
    <AppBar
      title="Joble"
      showMenuIconButton={false}
    />
    { children }
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
