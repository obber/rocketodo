import io from 'socket.io-client';

import newTodos from '../actions/newTodos';
import newUsers from '../actions/newUsers';

class Socket {
  constructor({ store }) {
    // cache the redux store
    this._store = store;
  }

  connect(namespace = '', cb) {
    this.socket = io.connect(`/${namespace}`);
    this.cb = cb;
    this._init();
    return this;
  }

  disconnect() {
    this.socket.disconnect();
    console.log('disconnecting');
  }

  _init() {
    this.socket.on('connected', (data) => {
      this._store.dispatch(newTodos(data.todos));
      this._store.dispatch(newUsers(data.userCount));
      this.cb();
    });

    this.socket.on('newTodos', (data) => {
      this._store.dispatch(newTodos(data.todos));
    });

    this.socket.on('newUser', (data) => {
      this._store.dispatch(newUsers(data.userCount));
    });

    this.socket.on('userDisconnect', (data) => {
      this._store.dispatch(newUsers(data.userCount));
    });
  }

  addTodo(todo) {
    this.socket.emit('addTodo', {
      todo
    });
  }

  removeTodo(id) {
    this.socket.emit('removeTodo', {
      id
    });
  }

  toggleTodo(id) {
    this.socket.emit('toggleTodo', {
      id
    });
  }
}

export default Socket;
