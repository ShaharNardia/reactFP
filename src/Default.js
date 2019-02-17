import React, { Component } from "react";
import "./App.css";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Users from "./_dal/Users";
import Todos from "./_dal/Todos";
import Posts from "./_dal/Posts";

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getUsers = () => {
    Users.getAllUsers().then(res => {
      this.props.dispatch({ type: "GetUsersFromServer", users: res.data });
    });
  };

  getTodos = () => {
    Todos.getAllTodos().then(res => {
      this.props.dispatch({ type: "GetTodosFromServer", todos: res.data });
    });
  };

  getPosts = () => {
    Posts.getAllPosts().then(res => {
      this.props.dispatch({ type: "GetPostsFromServer", posts: res.data });
    });
  };

  componentDidMount() {
    var p = Promise.resolve();
    p.then(() => {
      return this.getUsers();
    })
      .then(() => {
        return this.getPosts();
      })
      .then(() => {
        this.getTodos();
      });
  }

  render() {
    return (
      <div className="App flex">
      <h1>***React Final Project***</h1>
        <div className="half Main">
          <Route path="/" component={LeftDiv} />
        </div>
        <div className="half">
          <Route path="/" component={RightDiv} />
        </div>
      </div>
    );
  }
}

export default connect()(Default);
