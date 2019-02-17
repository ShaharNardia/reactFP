const initialState = {
  users: [],
  posts: [],
  todos: [],
  searchTerm: "",
  usersBySearch: [],
  selectedUserId: 0
};

const mainreducer = (state = initialState, action) => {
  switch (action.type) {
  
    //******users actions***********/
    case "SetUsersSearchTerm":
      return { ...state, searchTerm: action.searchTerm };

    case "SetSelectedUsersId":
      return { ...state, selectedUserId: action.userId };

      case "deleteUser":
      var _users = state.users.filter(user=> user.id !== action.userId)
      state.users = _users;
      return {...state};

      case "addUser":
       state.users.push(action.user);
      return { ...state};

      case "updateUser":
      var userIndex = state.users.findIndex(user => {
        return user.id === action.user.id;
      });
      state.users[userIndex] = action.user;
      return { ...state};


    //******todos actions***********/
    case "setTodoToCompleted":
      var todoIndex = state.todos.findIndex(element => {
        return element.id === action.id;
      });
      state.todos[todoIndex].completed = true;
      return { ...state };
    case "AddNewTodo":
      state.todos.push(action.todo);
      return { ...state };


    //******post actions***********/
    case "AddNewPost":
      state.posts.push(action.post);
      return { ...state };

    //************Start of - fiil data from web service***********************/
    case "GetUsersFromServer":
      return { ...state, users: action.users };

    case "GetTodosFromServer":
      return { ...state, todos: action.todos };

    case "GetPostsFromServer":
      return { ...state, posts: action.posts };
    //************End of - fiil data from web service***********************/
  

    default:
      return state;
  }
};

export default mainreducer;
