import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik, Form, Field } from 'formik';
import "../App.css";

class ShowUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      users: [],
      searchTerm: "",
      selectedUser: 0,
      street: "",
      city: "",
      zipcode: "",
      shownOtherData: []
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      users: props.store.users,
      searchTerm: props.store.searchTerm
    };
  }

  updateUser = (user) => {
    var _user = {
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.street,
        city: user.city,
        zipcode: user.zipcode
      }
    };
    this.props.dispatch({ type: "updateUser", user: _user });
  };

  selectUser = userId => {
    this.setState({ selectedUser: userId });
  };
  checkTodoList = userId => {
    var tasksForUser = this.props.store.todos.filter(todo => {
      return todo.userId === userId && todo.completed === false;
    }).length;
    if (tasksForUser > 0) {
      return false;
    } else {
      return true;
    }
  };
  deleteUser = uid => {
    this.props.dispatch({ type: "deleteUser", userId: uid });
  };

  hideOrShow = (userId, action) => {
    var userIdAtShowArray = this.state.shownOtherData.includes(userId);
    var arr = this.state.shownOtherData;
    if (action === "hide") {
      var hidearr = arr.filter(user => user !== userId);
      this.setState({ shownOtherData: hidearr });
    } else if (action === "show" && !userIdAtShowArray) {
      arr.push(userId);
      this.setState({ shownOtherData: arr });
    }
  };

  render() {
    var _users = this.state.users.filter(
      user =>
        user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    var usersList = _users.map((user, index) => {
      return (
        <Formik
          key={user.id}
          initialValues={{ id: user.id, name: user.name, email: user.email, zipcode: user.address.zipcode, street: user.address.street, city: user.address.city }}
          onSubmit={(values, { setSubmitting }) => {
            this.updateUser(values)
          }}
        >
          {() => (
            <Form>
              <div
                className={`userListItem ${
                  this.state.selectedUser !== user.id ? "" : "selectedUser"
                  } 
          ${
                  this.checkTodoList(user.id) ? "completedTasks" : "uncompletedTasks"
                  }`}

              >
                <div>
                  <Link
                    onClick={this.selectUser.bind(this, user.id)}
                    to={`/index/user/${user.id}`}
                  >
                    ID :
            </Link>
                <span name='id' type='label' value={user.id} >{user.id}</span>
                </div>
                <div className="rowDiv">
                  <span className="label"> Name : </span>
                  <Field
                    className="floatrightBtn"
                    type="text"
                    name='name'
                  />
                </div>
                <div className="rowDiv">
                  <span className="label"> Email : </span>
                  <Field
                    className="floatrightBtn"
                    type="text"
                    name='email'
                  />
                </div>
                <div />

                <div>
                  <input
                    type="button"
                    onClick={this.hideOrShow.bind(this, user.id, "hide")}
                    onMouseOver={this.hideOrShow.bind(this, user.id, "show")}
                    className="otherDataBtn"
                    value="Other Data"
                  />
                  <div
                    className="otherDetails"
                    style={
                      this.state.shownOtherData.includes(user.id)
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div className="rowDiv">
                      <span className="label">Street :</span>
                      <Field
                        className="floatrightBtn"
                        type="text"
                        name='street'
                      />
                    </div>
                    <div className="rowDiv">
                      <span className="label"> City : </span>
                      <Field
                        className="floatrightBtn"
                        type="text"
                        name='city'
                      />
                    </div>
                    <div className="rowDiv">
                      <span className="label">Zip Code :</span>
                      <Field
                        className="floatrightBtn"
                        type="text"
                        name='zipcode'
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="button"
                    value="Update"
                  />
                  <input
                    type="button"
                    onClick={this.deleteUser.bind(this, user.id)}
                    className="button"
                    value="Delete"
                  />
                </div>
              </div> </Form>
          )}
        </Formik>
      );
    });

    return (
      <div>
        {usersList}
      </div>

    );
  }
}

const mapStoreToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStoreToProps)(ShowUsersList);
