const setUser = (payload) => {
  return {
    type: "SET_USER",
    payload: { ...payload, loggedIn: true },
  };
};

export default { setUser };
