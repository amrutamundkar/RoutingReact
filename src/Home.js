import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { doFakeLogout } from "./service";
import { Link } from "react-router-dom";
import { isLoggedIn } from "./service";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Home</h1>
        </header>
        <p>
        <h1 > Home pAGE </h1>
        </p>
      </div>
    );
  }
}

export default Home;
