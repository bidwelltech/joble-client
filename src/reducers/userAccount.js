const userAccount = (state = {}, action) => {
  if (action.type === 'USER_LOGIN') {
    return {
      id: action.id,
      token: action.token,
    };
  }

  return state;
};

export default userAccount;
