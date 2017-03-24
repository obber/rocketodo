import React from 'react';

const Todo = ({ text, id, completed, toggleTodo, removeTodo }) => {
  return (
    <li className="row between-xs">
      <div className={`col-md-11 row middle-xs ${completed ? 'completed' : ''}`}>
        <button
          className="check-btn"
          type="button"
          onClick={() => toggleTodo(id)}>
          
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <span>
          {text}
        </span>
      </div>
      <div className="col-md-1 end-xs row">
        <button
          className="del-btn"
          type="button"
          onClick={() => removeTodo(id)}>X</button>
      </div>
    </li>
  )
};

export default Todo;
