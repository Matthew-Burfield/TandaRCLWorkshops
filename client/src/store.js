import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  token: null,
  currentUser: null,
  postData: {
    count: 0,
    items: [],
    next: true,
    page: 0
  }
};

const persistConfig = {
  key: "root",
  storage
};

const cloneState = state => ({
  ...state,
  postData: {
    ...state.postData
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...cloneState(state),
        token: action.payload
      };
    }
    case "LOGOUT": {
      return initialState;
    }
    case "POSTS_LOADED": {
      return {
        ...cloneState(state),
        postData: action.payload
      };
    }
    default:
      return state;
  }
};

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  // persistedReducer,
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export const persistor = persistStore(store);
