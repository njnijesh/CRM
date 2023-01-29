const INITIAL_STATE = {
  name: "username",
  loggedIn: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default UserReducer;
