import GetNextId from '../handlers/GetNextId'
import React, { Component } from "react";
import { connect } from "react-redux";
import User from './User';
import "../App.css";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Email: "" };
  }

  changedEmail = e => {
    this.setState({ Email: e.target.value });
  };
  changedName = e => {
    this.setState({ Name: e.target.value });
  };
  cancel = () => {
    this.props.history.push("index/");
  };
  add = () => {
    var nextId = GetNextId.id(this.props.store.users);
    var address = { street: "", city: "", zipcode: ""};
    var _user = new User(nextId, this.state.Name, this.state.Email, address);
    
    this.props.dispatch({ type: "addUser", user: _user });
    this.props.history.push("index/");
  };
  render() {
    return (
      <div className="">
        <div className="left topdiv">
          <span className="label">Add New User</span>
        </div>
        <div className="App addpost">
          <span className="label">Name :</span>
          <input
            className="margleft"
            onChange={this.changedName}
            type="text"
            value={this.state.Name}
          />
          <br />
          <span className="label">Email :</span>
          <input
            className="margleft"
            onChange={this.changedEmail}
            type="text"
            value={this.state.Email}
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
export default connect(mapStoreToProps)(AddUser);
