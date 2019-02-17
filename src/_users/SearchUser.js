import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Link } from 'react-router-dom';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: "" };
  }

  searchTermChanged = e => {
    this.props.dispatch({
      type: "SetUsersSearchTerm",
      searchTerm: e.target.value
    });
  };
  render() {
    return (
      <div>
        Search
        <input
          className="space"
          type="text"

          placeholder="search user name or email"
          onChange={this.searchTermChanged}
        />
        <Link to={'/index/adduser'}>
          <input
            className="space button"
            type="button"
            value="Add"
            onClick={this.addUser}
          /></Link>
      </div>
    );
  }
}

export default connect()(SearchUser);
