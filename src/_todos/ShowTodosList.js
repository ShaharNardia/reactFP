import React, { Component } from "react";
import {connect} from 'react-redux'
import "../App.css";

class ShowTodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id, todos: [] };
  }

  static getDerivedStateFromProps(props, state){
    return {todos : props.store.todos, userId: props.match.params.id}
  }

  add = () => {
    this.props.history.push(`${this.props.match.url}/addtodo`);
  };
  markCompleted=(todoId)=>{
    this.props.dispatch({type: 'setTodoToCompleted', id: todoId})
  }
  render() {
    var todosByUserId = this.state.todos.filter(todo=>todo.userId===parseInt(this.state.userId));
    var todos = todosByUserId.map((todo, index) => {
      return (
        <div className="posttodoItem" key={index}>
          <div>
            <span className="label"> Title : </span> {todo.title}
          </div>
          <div>
            <span className="label"> Completed : </span>
            {todo.completed === false ? "False" : "True"}
          </div>
          <span
            className={todo.completed === false ? "todoBtn" : "hideBtn"}
          >
            <input
              type="button"
              onClick={this.markCompleted.bind(this,todo.id)}
              className="space button "
              value="Mark Completed"
            />
          </span>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="left topdiv">
          <span className="label">
            Todos - User {this.props.match.params.id}{" "}
          </span>
          <input
            className="space button floatrightBtn"
            type="button"
            value="Add"
            onClick={this.add}
          />
        </div>
        <div className="userActivityDiv">{todos}</div>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps) (ShowTodosList);
