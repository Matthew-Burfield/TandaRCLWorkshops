import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";

class App extends React.Component {
  state = { token: null };
  updateToken = token => {
    this.setState({ token });
  };
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            this.state.token ? <Profile /> : <Redirect to="/login" />
          )}
        />
    <Route
      path="/login"
      render={() => (
            <Login token={this.state.token} setToken={this.updateToken} />
          )}
        />
        {/* <Route path="/profile" component={Profile} /> */}
      </React.Fragment>
    );
  }
}

export default App;
