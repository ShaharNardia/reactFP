import React, { Component } from "react";
import "./App.css";
import ShowUsersList from "./_users/ShowUsersList";
import SearchUser from "./_users/SearchUser";

class LeftDiv extends Component {
  render() {
    return (
      <div className="App">
        <SearchUser />
        <ShowUsersList />
      </div>
    );
  }
}

export default LeftDiv;
