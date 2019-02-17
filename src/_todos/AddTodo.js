import React, { Component } from "react";
import { connect } from "react-redux";
import GetNextId from '../handlers/GetNextId';
import "../App.css";


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  changedTitle = e => {
    this.setState({ title: e.target.value });
  };
  add = () => {
    var nextId = GetNextId.id(this.props.store.todos);
    var _todo = {
      userId: parseInt(this.props.match.params.id),
      id: nextId,
      title: this.state.title,
      completed: false
    };
    this.props.dispatch({ type: "AddNewTodo", todo: _todo });
    this.props.history.push(`/index/user/${this.props.match.params.id}`);
  };

  cancel = () => {
    this.props.history.push(`/index/user/${this.props.match.params.id}`);
  };
  render() {
    return (
      <div>
        <div className="left topdiv">
          <span className="label">
            New Todo - User {this.props.match.params.id}
          </span>
        </div>
        <div className="App addpost">
          <span className="label">Title :</span>
          <input
            className="margleft"
            onChange={this.changedTitle}
            type="text"
            value={this.state.title}
          />
          <div className="flex addcancelbtns">
            <input
              type="button"
              onClick={this.add}
              className="button"
              value="Add"
            />
            <input
              type="button"
              onClick={this.cancel}
              className="button"
              value="Cancel"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(AddTodo);
