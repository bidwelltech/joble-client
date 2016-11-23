import React from 'react';
import './Account.css';

const Account = ({ children }) => (
  <div className="Account">
    <p>{'Account!'}</p>
    { children }
  </div>
);

export default Account;
