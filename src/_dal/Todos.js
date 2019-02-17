import axios from "axios";

class Todos {
  static getAllTodosFromWS() {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  }
  static getAllTodos() {
    return this.getAllTodosFromWS();
  }
}

export default Todos;
