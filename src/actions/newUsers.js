const newUsers = (userCount) => {
  return {
    type: 'NEW_USERS',
    userCount
  }
};

export default newUsers;
