import axios from "axios";

class Posts {
  static getAllPostsFromWS() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }
  static getAllPosts() {
    return this.getAllPostsFromWS().then(data => {
      return data;
    });
  }
}

export default Posts;
