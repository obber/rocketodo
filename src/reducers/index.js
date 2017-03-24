const initialState = {
  todos: [],
  userCount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_USERS':
      return Object.assign({}, state, {
        userCount: action.userCount
      });
    case 'NEW_TODOS':
      return Object.assign({}, state, {
        todos: action.todos.slice()
      });
    default:
      return state
  }
}
