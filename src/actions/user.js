const login = (id, token) => ({
  type: 'USER_LOGIN',
  id,
  token,
});

export default {
  login,
};
