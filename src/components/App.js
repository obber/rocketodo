import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import TodoApp from './TodoApp';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todoapp">TodoApp</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/todoapp" component={() => (
            <TodoApp socket={this.props.socket} />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
