import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddTodo from "./_todos/AddTodo";
import AddPost from "./_posts/AddPost";
import ShowTodosList from "./_todos/ShowTodosList";
import ShowPostsList from "./_posts/ShowPostsList";

class TodosAndPosts extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/index/user/:id/addtodo" component={AddTodo} />
          <Route path="/index/user/:id/" component={ShowTodosList} />
        </Switch>
        <Switch>
          <Route path="/index/user/:id/addpost" component={AddPost} />
          <Route path="/index/user/:id/" component={ShowPostsList} />
        </Switch>
      </div>
    );
  }
}

export default TodosAndPosts;
