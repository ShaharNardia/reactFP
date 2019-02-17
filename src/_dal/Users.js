import axios from "axios";

class Users {
 static getAllUsersFromWS() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
  static getAllUsers() {
    return this.getAllUsersFromWS();
  }
}

export default Users;
