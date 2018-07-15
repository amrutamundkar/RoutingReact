import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { doFakeLogin } from "./service";
import { Link, Redirect } from "react-router-dom";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.login = this.login.bind(this);
  };

  login() {
    doFakeLogin();
    this.setState({ loggedIn: true });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { loggedIn } = this.state;

    if (loggedIn) {
    return (<Redirect to={from} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <button onClick={this.login}>Login</button>
          {/* <input type ="button" value ={(loggedIn)? ("LogOut"): ("Login")}onClick= {this.login}/> */}
        </p>
      </div>
    );
  }
}

export default Login;
