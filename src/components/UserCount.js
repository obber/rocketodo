import React from 'react';

const UserCount = ({ count }) => {
  return (
    <div className="user-count">
      <span>{count}</span> users are connected to this list
    </div>
  );
}

export default UserCount;
