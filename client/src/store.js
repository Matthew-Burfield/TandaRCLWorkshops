import { createStore } from "redux";

const initialState = { currentUser: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...store,
        token: action.payload
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
