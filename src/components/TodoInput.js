import React from 'react';

const TodoInput = ({
  onKeyPress,
  onChange,
  value,
  invalid
}) => (
  <div className="todo-input">
    <input type='text' 
      placeholder='Buy pizza, Eat cookies, etc.'
      className={invalid ? 'error' : ''}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value} />
  </div>
);

export default TodoInput;
