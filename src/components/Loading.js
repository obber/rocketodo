import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="row wrapper loading-container">
        <div className="col-md-12 loading">
          <h1>Connecting...</h1>
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
