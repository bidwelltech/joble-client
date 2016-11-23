import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('tried to prevent the default!');

    const loginEndpoint = 'http://localhost:3001/api/users/login';
    //const loginEndpoint = 'https://httpbin.org/post';
    fetch(loginEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        username: this.usernameInput.getValue(),
        password: this.passwordInput.getValue(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleLogin}>
          <TextField
            hintText="Username"
            floatingLabelText="Username"
            type="text"
            ref={(input) => { this.usernameInput = input; }}
          />
          <br />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            ref={(input) => { this.passwordInput = input; }}
          />
          <br />
          <RaisedButton
            label="Log In"
            primary
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
