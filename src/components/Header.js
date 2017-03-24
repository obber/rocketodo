import React from 'react';

const Header = () => {
  return (
    <div className="header row">
      <div className="logo col-md-6">
        <i className="fa fa-rocket fa-2x logo-icon" aria-hidden="true"></i>
        <h1 className="logo-text">Rocketodo</h1>
      </div>
      <div className="col-md-6 row middle-xs end-xs">
        <p className="subtitle">Collaboration Todo List</p>
      </div>
    </div>
  );
}

export default Header;
