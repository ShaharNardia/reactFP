import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";

class ShowPostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    return { posts: props.store.posts, userId: props.match.params.id };
  }

  add = () => {
    this.props.history.push(`${this.props.match.url}/addpost`);
  };

  render() {
    var postsById = this.state.posts.filter(
      post => (post.userId === parseInt(this.state.userId))
    );

    var posts = postsById.map((item, index) => {
      return (
        <div className="posttodoItem" key={index}>
          <div>
            <span className="label"> Title : </span> {item.title}
          </div>
          <div>
            <span className="label"> Body : </span> {item.body}
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="left topdiv">
          <span className="label">Posts - User {this.state.userId}</span>
          <input
            className="space button floatrightBtn"
            type="button"
            value="Add"
            onClick={this.add}
          />
        </div>
        <div className="userActivityDiv">{posts}</div>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(ShowPostsList);
