import React, { Component } from "react";
import {connect} from 'react-redux'
import GetNextId from '../handlers/GetNextId';
import "../App.css";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body:"" };
  }
  changedTitle = e => {
    this.setState({ title: e.target.value });
  };
  changedBody = e => {
    this.setState({ body: e.target.value });
  };
  cancel=()=>{
    this.props.history.push(`/index/user/${this.props.match.params.id}`);
  }
  add = () => {
    var nextId = GetNextId.id(this.props.store.posts);
    var _post = {
      userId: parseInt(this.props.match.params.id),
      id: nextId,
      title: this.state.title,
      body: this.state.body
    };
    this.props.dispatch({ type: "AddNewPost", post: _post });
    this.props.history.push(`/index/user/${this.props.match.params.id}`);
  };
  
  render() {
    return (
      <div className="">
        <div className="left topdiv">
          <span className="label">
            New Post - User {this.props.match.params.id}
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
<br/>
<span className="label">Body :</span>
          <input
            className="margleft"
            onChange={this.changedBody}
            type="text"
            value={this.state.body}
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
const mapStoreToProps=(state)=>{
  return{
    store : state
  }
}
export default connect(mapStoreToProps) (AddPost);
