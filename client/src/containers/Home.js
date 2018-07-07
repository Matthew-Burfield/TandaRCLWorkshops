import React from "react";
import { connect } from "react-redux";

const Home = props => (
  <div style={{ background: "red", height: "100%", width: "100%" }}>
    <h1>Profile Page</h1>
  </div>
);

const mapStateToProps = state => ({
  token: state.token
});

export default connect(mapStateToProps)(Home);
