import React, { Component } from 'react';
import { connect } from 'react-redux';

import Socket from '../modules/Socket';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import TodoInput from './TodoInput';
import Todos from './Todos';
import UserCount from './UserCount';

class App extends Component {
  constructor() {
    super();

    this.state = {
      connected: false,
      invalid: false,
      todo: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(id) {
    this.socket.toggleTodo(id);
  }

  removeTodo(id) {
    this.socket.removeTodo(id);
  }

  handleInputChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      if (this.state.todo) {
        this.setState({
          todo: ''
        });
        this.socket.addTodo({
          text: this.state.todo,
          completed: false
        });
      } else {
        this.setState({
          invalid: true
        });
      }
    } else if (this.state.invalid) {
      this.setState({
        invalid: false
      });
    }
  }

  componentDidMount() {
    this.socket = new Socket({
      store: this.props.store
    }).connect('', () => {
      setTimeout(() => {
        this.setState({
          connected: true
        });
      }, 1500);
    });
  }

  render() {
    if (this.state.connected) {
      return (
        <div className="row wrapper">
          <div className="col-md-12">
            <Header />

            <div className="row">
              <div className="col-md-12 todo-container">
                <TodoInput 
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleInputChange}
                  value={this.state.todo}
                  invalid={this.state.invalid} />

                <h3>Todo:</h3>
                <Todos
                  list={this.props.incompleteTodos}
                  toggleTodo={this.toggleTodo}
                  removeTodo={this.removeTodo} />

                <h3>Completed:</h3>
                <Todos
                  list={this.props.completeTodos}
                  toggleTodo={this.toggleTodo}
                  removeTodo={this.removeTodo} />

                <UserCount count={this.props.userCount} />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
};

const mapStateToProps = (state) => {
  return {
    completeTodos: state.todos.filter(item => item.completed),
    incompleteTodos: state.todos.filter(item => !item.completed),
    userCount: state.userCount
  };
}

export default connect(mapStateToProps)(App);
