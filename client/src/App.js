import { connect } from "react-redux";
import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";

const App = props => {
  const { token } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          if (token) {
            return <Home />;
          }
          return <Redirect push to="/login" />;
        }}
      />
      <Route
        path="/login"
        render={() => {
          if (token) {
            return <Redirect push exact to="/" />;
          }
          return <Login />;
        }}
      />
    </Switch>
  );
};

const mapStateToProps = state => ({
  token: state.token
});

export default withRouter(connect(mapStateToProps)(App));
