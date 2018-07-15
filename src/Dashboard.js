import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { doFakeLogout } from "./service";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dashboard</h1>
        </header>
        <p>
            <Link to="/books">See books details</Link>
        </p>
        <p>
          <Link onClick={doFakeLogout} to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

export default Dashboard;
