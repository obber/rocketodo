import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class Todos extends Component {
  constructor() {
    super()
  }

  render() {
    const { list, removeTodo, toggleTodo } = this.props;
    return (
      <div className='todo-list list'>
        <ul>
          {list.map((item, idx) => (
            <Todo
              key={idx}
              text={item.text}
              id={item.id}
              completed={item.completed}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
