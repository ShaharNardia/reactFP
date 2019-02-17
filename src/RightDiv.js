import React, { Component } from "react";
import "./App.css";
import AddUser from "./_users/AddUser";
import { Switch, Route } from "react-router-dom";
import TodosAndPosts from "./TodosAndPosts";

class RightDiv extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route  path='/index/adduser' component={AddUser}
          />
          <Route path='/index/user/:id' component={TodosAndPosts} />
        </Switch>
      </div>
    );
  }
}

export default RightDiv;
