const newTodos = (todos) => {
  return {
    type: 'NEW_TODOS',
    todos
  }
};

export default newTodos;
