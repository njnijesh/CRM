const setUser = (payload) => {
  return {
    type: "SET_USER",
    payload: { ...payload, loggedIn: true },
  };
};
const exports = { setUser };
export default exports;
