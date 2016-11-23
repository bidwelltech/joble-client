import React from 'react';
import Main from '../Main';
import Sidebar from '../Sidebar';
import './App.css';

const App = ({ children }) => (
  <div className="App">
    <Sidebar />
    <Main>
      { children }
    </Main>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
