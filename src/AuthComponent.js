
import React, { Component}  from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import BookList from "./Book";
import Home from "./Home";
import BookDetails from "./BookDetails";
import { isLoggedIn } from "./service";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => {
         console.log(props.history.location);
         return isLoggedIn() ? ( <Component {...props} /> ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.history.location }
            }}
          />
        )}
      }
    />
  );

function requireAuth(nextState, replaceState) {
      console.log(1)
    if (0)
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

export const AuthComponent = () => (
    <div>
      <h1>  Welcome AM </h1>
        <Router>
        <div>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/books" component={BookList} />
            <PrivateRoute path="/books/:id" component={BookDetails}/>
        </div>
        </Router>
    </div>
  );
