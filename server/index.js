const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3001;

require('./modules/auth');

app.use(express.static('./build'));

const todos = [];
const todosHash = {};

let userCount = 0;

const reEmit = () => {
  io.emit('newTodos', {
    todos: todos.slice(),
    userCount
  });
}

io.on('connection', (socket) => {
  userCount++;
  socket.broadcast.emit('newUser', {
    userCount
  });
  
  console.log('socket connected!');
  socket.emit('connected', {
    todos: todos.slice(),
    userCount,
  });

  socket.on('addTodo', (data) => {
    const { todo } = data;
    todo.id = crypto.randomBytes(20).toString('hex');
    todos.push(todo);
    todosHash[todo.id] = todo;
    reEmit();
  });

  socket.on('toggleTodo', (data) => {
    const { id } = data;
    todosHash[id].completed = !todosHash[id].completed;
    reEmit();
  })

  socket.on('removeTodo', (data) => {
    const { id } = data;
    const todoToRemove = todosHash[id];
    const idx = todos.indexOf(todoToRemove);
    if (idx !== -1) {
      todos.splice(idx, 1);
    }
    reEmit();
  });

  socket.on('disconnect', () => {
    userCount--;
    io.emit('userDisconnect', {
      userCount
    });
  });
});

server.listen(PORT);
console.log(`app listening on port ${PORT}`);
