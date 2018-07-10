import axios from "axios";
import { connect } from "react-redux";
import React from "react";

class Home extends React.Component {
  componentDidMount() {
    axios
      .get("http://social.workshops.tanda.co/posts", {
        headers: { Authorization: `bearer ${this.props.token}` }
      })
      .then(response => response.data)
      .then(postData => {
        this.props.receivePosts(postData);
      });
  }
  render() {
    return (
      <div style={{ background: "red", height: "100%", width: "100%" }}>
        <h1>Profile Page</h1>
        <button onClick={this.props.logout}>Logout</button>
        {this.props.posts.map(post => <div key={post.body}>{post.body}</div>)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  receivePosts: postData =>
    dispatch({ type: "POSTS_LOADED", payload: postData }),
  logout: () => dispatch({ type: "LOGOUT" })
});

const mapStateToProps = state => ({
  token: state.token,
  posts: state.postData.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
